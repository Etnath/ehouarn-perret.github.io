---
layout: post
title:  "Coursera - Machine Learning - Notes: Week 5 - Backpropagation"
date:   2018-02-20 11:11:11 -0500
categories: coursera machine learning neural networks backpropagation
---

Content

* TOC
{:toc}

# Backpropagation

## Cost Function

Definitions:

- $$L$$ = total number of layers in the network.
- $$s_l$$ = number of units (not counting bias unit) in layer $$l$$.
- $$K$$ = number of output units/classes.

$$
\begin{gather*} J(\Theta) = 
- \frac{1}{m} \cdot \sum_{i=1}^m \left[ \sum_{k=1}^K \left[y^{(i)}_k \log ((h_\Theta (x^{(i)}))_k) + (1 - y^{(i)}_k)\log (1 - (h_\Theta(x^{(i)}))_k)\right] \right] + 
\frac{\lambda}{2m} \cdot \sum_{l=1}^{L-1} \left[ \sum_{i=1}^{s_l} \left[ \sum_{j=1}^{s_{l+1}} ( \Theta_{j,i}^{(l)})^2 \right] \right] \end{gather*}
$$

Nested summations: due to multiple output nodes.

Notes:

- The double sum simply adds up the logistic regression costs calculated for each cell in the output layer.
- The triple sum simply adds up the squares of all the individual $$\Theta$$s in the entire network.
- The $$i$$ in the triple sum does not refer to training example $$i$$.

## Algorithm

Goal: $$\min_\Theta J(\Theta)$$.

Given a training set: $$\lbrace (x^{(1)}, y^{(1)}) \dots (x^{(m)}, y^{(m)})\rbrace$$.

- Set (for all $$l$$, $$i$$, $$j$$): $$\Delta_{i, j}^l = 0$$.

- For training example $$t = 1$$ to $$m$$:
  - Set $$a^{(1)} = x^{(i)}$$.
  - Perform Forward Propagation to compute $$a^{(l)}$$ for $$l = 2, 3, \dots, L$$.
    - Given one training example $$(x, y)$$:
    - $$a^{(1)} = x$$.
    - $$z^{(2)} = \Theta^{(1)} a^{(1)}$$.
    - $$a^{(2)} = g(z^{(2)})$$ (add the bias unit $$a_0^{(2)}$$).
    - $$z^{(3)} = \Theta^{(3)} a^{(3)}$$.
    - $$a^{(3)} = g(z^{(3)})$$ (add the bias unit $$a_0^{(3)}$$).
    - $$z^{(4)} = \Theta^{(4)} a^{(4)}$$.
    - $$a^{(4)} = h_\Theta(x) = g(z^{(4)})$$.
  - $$\delta^{(L)} = a^{(L)} - y^{(t)}$$.
  - Compute $$\delta^{(L-1)}, \delta^{(L-2)},\dots,\delta^{(2)}$$ using $$\delta^{(l)} = \left( \left(\Theta^{(l)} \right)^T \delta^{(l+1)} \right)\ \cdot  a^{(l)}\ \cdot \left(1 - a^{(l)} \right)$$, knowing that $$g'(z^{(l)}) = a^{(l)}\ \cdot (1 - a^{(l)})$$.
  - $$\Delta^{(l)}_{i,j} = \Delta^{(l)}_{i,j} + a_j^{(l)} \delta_i^{(l+1)}$$ which vectorized gives: $$\Delta^{(l)} = \Delta^{(l)} + \delta^{(l+1)}(a^{(l)})^T$$.


 - Update the $$\Delta$$ matrix: 
 
   - $$j \neq 0 \Rightarrow D^{(l)}_{i,j} = \dfrac{1}{m}\left(\Delta^{(l)}_{i,j} + \lambda\Theta^{(l)}_{i,j}\right)$$.
   - $$j = 0 \Rightarrow D^{(l)}_{i,j} = \dfrac{1}{m}\Delta^{(l)}_{i,j}$$.

Note: 

- $$D$$ is actually a kind of accumulator $$\frac \partial {\partial \Theta_{ij}^{(l)}} J(\Theta)$$.

- Intuitively, $$\delta_j(l)$$ is the "error" for $$a_j^{(l)}$$ (unit $$j$$ in layer $$l$$).
More formally, the delta values are actually the derivative of $$\mathrm{Cost}(t) =y^{(t)} \log \left(h_\Theta (x^{(t)}) \right) + \left(1 - y^{(t)} \right)\ \log \left(1 - h_\Theta(x^{(t)} \right)$$: 
  - $$\delta_j^{(l)} = \dfrac{\partial}{\partial z_j^{(l)}} \cdot \mathrm{Cost}(t)$$.

# Implementation Details

## Unrolling Parameters

If we have:

- $$\Theta^{(1)}, \Theta^{(2)}, \Theta^{(3)}, \dots$$
- $$D^{(1)}, D^{(2)}, D^{(3)}, \dots$$

In order to use optimizing functions such as `fminunc()`, we will want to "unroll" all the elements and put them into one long vector:

{% highlight matlab linenos %}

thetaVector = [ Theta1(:); Theta2(:); Theta3(:); ]
deltaVector = [ D1(:); D2(:); D3(:) ]

{% endhighlight %}

To get back the `Theta` matrices from the `thetaVector`, you can use the  `reshape` [function][reshape] (knowing the dimensions of the matrices):

{% highlight matlab linenos %}

% Theta1 is 10x11
% Theta2 is 10x11
% Theta3 is 1x11

Theta1Rows = 10;
Theta1Cols = 11;
Theta2Rows = 10;
Theta2Cols = 11;
Theta3Rows = 1;
Theta3Cols = 11;

Theta1Start = 1;
Theta1End = Theta1Rows * Theta1Cols;
Theta2Start = Theta1End + 1;
Theta2End = Theta1End + Theta2Rows * Theta2Cols;
Theta3Start = Theta2End + 1;
Theta3End = Theta2End + Theta3Rows * Theta3Cols;

Theta1 = reshape(thetaVector(Theta1Start : Theta1End), Theta1Rows, Theta1Cols);
Theta2 = reshape(thetaVector(Theta2Start : Theta2End), Theta2Rows, Theta2Cols);
Theta3 = reshape(thetaVector(Theta3Start : Theta3End), Theta3Rows, Theta3Cols);

{% endhighlight %}


## Gradient Checking

Gradient checking will assure that our backpropagation works as intended. 

Derivative of our cost function:

- $$\dfrac{\partial}{\partial\Theta}J(\Theta) \approx \dfrac{J(\Theta + \epsilon) - J(\Theta - \epsilon)}{2\epsilon}$$

With multiple theta matrices with respect to $$\Theta_j$$:

- $$\dfrac{\partial}{\partial\Theta_j}J(\Theta) \approx \dfrac{J(\Theta_1, \dots, \Theta_j + \epsilon, \dots, \Theta_n) - J(\Theta_1, \dots, \Theta_j - \epsilon, \dots, \Theta_n)}{2\epsilon}$$

There's a large range of values of $$\epsilon$$ that should work well, but we don't set $$\epsilon$$ to be "extremely" small, say $$10^{-20}$$, as that would lead to numerical roundoff errors. Instead we often choose $$10^{-4}$$.

Hence, we are only adding or subtracting epsilon to the $$\Theta_j$$ matrix:

{% highlight matlab linenos %}

epsilon = 1e-4;
for i = 1 : n,
  thetaPlus = theta;
  thetaPlus(i) += epsilon;
  thetaMinus = theta;
  thetaMinus(i) -= epsilon;
  gradApprox(i) = (J(thetaPlus) - J(thetaMinus)) / (2 * epsilon)
end;

{% endhighlight %}

We can check that: `gradApprox` $$\approx$$ `deltaVector`. 

Notes: 
- The code to compute gradApprox can be very slow.
- `gradApprox` needs to be computed only once.


## Random Initialization

Initializing all theta weights to zero does not work with neural networks. 
When we backpropagate, all nodes will update to the same value repeatedly. 
nstead we can randomly initialize our weights for our $$\Theta$$ matrices using the following method, "Symmetry Breaking".

We initialize each $$\Theta_{ij}^{(l)}$$ to a random value between $$[\epsilon, +\epsilon]$$:

{% highlight matlab linenos %}

% Theta1 is 10x11
% Theta2 is 10x11 
% Theta3 is 1x11

Theta1 = rand(10, 11) * (2 * INIT_EPSILON) - INIT_EPSILON;
Theta2 = rand(10, 11) * (2 * INIT_EPSILON) - INIT_EPSILON;
Theta3 = rand(1, 11) * (2 * INIT_EPSILON) - INIT_EPSILON;

{% endhighlight %}

Note: this $$\epsilon$$ is different from the one used in the Gradient Check.

## Putting it Together

First, pick a network architecture; choose the layout of your neural network, including how many hidden units in each layer and how many layers in total you want to have.

Parameters:

- Number of input units = dimension of features $$x^{(i)}$$.
- Number of output units = number of classes.
- Number of hidden units per layer = usually more the better (must balance with cost of computation as it increases with more hidden units).
- Defaults: 1 hidden layer. If you have more than 1 hidden layer, then it is recommended that you have the same number of units in every hidden layer.

Neural Network Training:

- Randomly initialize the weights.
- Implement forward propagation to get $$h_\Theta(x^{(i)})$$ for any $$x^{(i)}$$.
- Implement the cost function.
- Implement backpropagation to compute partial derivatives.
- Use gradient checking to confirm that your backpropagation works. Then disable gradient checking.
- Use gradient descent or a built-in optimization function to minimize the cost function with the weights in theta.

{% highlight matlab linenos %}

for i = 1 : m,
  % Perform forward propagation and backpropagation using example (x(i),y(i))
  % (Get activations a(l) and delta terms d(l) for l = 2,...,L

{% endhighlight %}

Notes: 

- We ideally want $$h_\Theta(x^{(i)}) \approx y^{(i)}$$ in order to minimize our cost function.
- However, keep in mind that $$J(\theta)$$ is not convex and thus we can end up in a local minimum instead. 



[reshape]: https://www.mathworks.com/help/matlab/ref/reshape.html
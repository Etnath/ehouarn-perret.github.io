---
layout: post
title:  "Coursera - Machine Learning - Notes: Week 4 - Neural Networks"
date:   2018-02-19 11:11:11 -0500
categories: coursera machine learning neural networks representation
---

Content

* TOC
{:toc}

# Neural Networks

## Biology

Computational Units = Dendrites (inputs) + Axons(outputs).

Dendrites are like the input features: $$x_1, x_2, \dots, x_n$$.

The output is the same as the result of the hypothesis function.

## Artificial Neurons

Based on a loose analogy with biological neurons.

$$x_0$$ is sometimes also called the "bias unit" and it is always equal to $$1$$.

The same function as in the logistic regression is used for neural networks, aka the sigmoid function, called here the "Activation Function": $$\frac{1}{1 + e^{-\theta^Tx}}$$.

The $$\theta$$ parameters are also called "weights".

## Layers Terminology:

- The first layer is the "input layer".
- The last layer is the "output layer".
- The layers in between are the "hidden layers".

## Simple representation:


### Layers
- Without hidden layers:
  - $$\begin{bmatrix}x_0 \newline x_1 \newline x_2 \newline \end{bmatrix}\rightarrow\begin{bmatrix}\ \ \ \newline \end{bmatrix}\rightarrow h_\theta(x)$$

- With one hidden layer:
  - $$\begin{bmatrix}x_0 \newline x_1 \newline x_2 \newline x_3\end{bmatrix}\rightarrow\begin{bmatrix}a_1^{(2)} \newline a_2^{(2)} \newline a_3^{(2)} \newline \end{bmatrix}\rightarrow h_\theta(x)$$

### Terminology

- Hidden Layers Nodes are also called "Activation Units".
- $$a_i^{(j)}$$: activation of the unit $$i$$ in layer $$j$$.
- $$\Theta^{(j)}$$: matrix of weights controlling function mapping from layer $$j$$ to layer $$j+1$$.

Example: If layer 1 has 2 input nodes and layer 2 has 4 activation nodes:

- Dimensions of are going to be $$4 \times 3$$ where $$s_j = 2$$ and $$s_{j+1} = 4$$.
- So $$s_{j+1} \times (s_j + 1) = 4 \times 3$$.

For example the value for each of the activation node is given by:

- $$a_1^{(2)} = g(\Theta_{10}^{(1)}x_0 + \Theta_{11}^{(1)}x_1 + \Theta_{12}^{(1)}x_2 + \Theta_{13}^{(1)}x_3)$$
- $$a_2^{(2)} = g(\Theta_{20}^{(1)}x_0 + \Theta_{21}^{(1)}x_1 + \Theta_{22}^{(1)}x_2 + \Theta_{23}^{(1)}x_3)$$
- $$a_3^{(2)} = g(\Theta_{30}^{(1)}x_0 + \Theta_{31}^{(1)}x_1 + \Theta_{32}^{(1)}x_2 + \Theta_{33}^{(1)}x_3)$$
- $$h_\Theta(x) = a_1^{(3)} = g(\Theta_{10}^{(2)}a_0^{(2)} + \Theta_{11}^{(2)}a_1^{(2)} + \Theta_{12}^{(2)}a_2^{(2)} + \Theta_{13}^{(2)}a_3^{(2)})$$

If network has $$s_j$$ units in layer $$j$$ and $$s_j+1$$ units in layer $$j+1$$, then $$\Theta_{(j)} $$ will be of dimension $$s_{j+1} \times (s_j+1)$$.

### Vectorization

Let's define a new variable: $$z_k^{(j)}$$.

Which would give for example based on our previous example: 

- $$a_1^{(2)} = g(z_1^{(2)})$$
- $$a_2^{(2)} = g(z_2^{(2)})$$
- $$a_3^{(2)} = g(z_3^{(2)})$$

For example $$j=2$$, node $$k$$:

- $$z_k^{(2)} = \Theta_{k,0}^{(1)}x_0 + \Theta_{k,1}^{(1)}x_1 + \cdots + \Theta_{k,n}^{(1)}x_n$$

Hence the vector representation of $$x$$ and $$z^j$$ is:

- $$\begin{align*}x = \begin{bmatrix}x_0 \newline x_1 \newline\cdots \newline x_n\end{bmatrix} &z^{(j)} = \begin{bmatrix}z_1^{(j)} \newline z_2^{(j)} \newline\cdots \newline z_n^{(j)}\end{bmatrix}\end{align*}$$

Setting $$x = a^{(i)}$$, we can rewrite the equation as: $$z^{(j)} = \Theta^{(j-1)}a^{(j-1)}$$.

We are multiplying our matrix $$\Theta^{(j-1)}$$ with dimensions $$s_{j} \times (s_j+1)$$ by our vector $$a^{(j-1)}$$ with height $$(n+1)$$. This gives us our vector $$z^{j}$$ with height $$s_j$$.

So the vector of the activation nodes in the layer $$j$$ is:

- $$a^{(j)} = g(z^{(j)})$$

$$g$$ can be applied element-wise to the vector $$z^{(j)}$$.

Then we can add the bias unit $$a_0^{(j)}$$ (after we computed $$a^j$$).

Now let's compute another vector:

- $$z^{(j+1)} = \Theta^{(j)}a^{(j)}$$

The last $$\Theta^{(j)}$$ matrix will have only one row which is multiplied by one column $$a^{(j)}$$ so the result is one single number.

So the final result: 

- $$h_\Theta(x) = a^{(j+1)} = g(z^{(j+1)})$$

We can notice that the last step is really the same as for the logistic regression.

# Applications

## AND Operator

Modelisation:

- $$\begin{align*}\begin{bmatrix}x_0 \newline x_1 \newline x_2\end{bmatrix} \rightarrow\begin{bmatrix}g(z^{(2)})\end{bmatrix} \rightarrow h_\Theta(x)\end{align*}$$

- $$\Theta^{(1)} =\begin{bmatrix}-30 & 20 & 20\end{bmatrix}$$

Which turns out to represent the AND operator:

$$\begin{align*}& h_\Theta(x) = g(-30 + 20x_1 + 20x_2) \newline \newline & \{x_1 = 0, \ \ \ \ x_2 = 0\} \ \ \Rightarrow \ \ g(-30) = \frac{1}{1 + e^{-(-30)}} \approx 0 \newline & \{x_1 = 0, \ \ \ \ x_2 = 1\} \ \ \Rightarrow \ \ g(-10) = \frac{1}{1 + e^{-(-10)}} \approx 0 \newline & \{x_1 = 1, \ \ \ \ x_2 = 0\} \ \ \Rightarrow \ \ g(-10) = \frac{1}{1 + e^{-(-10)}} \approx 0 \newline & \{x_1 = 1, \ \ \ \ x_2 = 1\} \ \ \Rightarrow \ \ g(+10) = \frac{1}{1 + e^{-(+10)}} \approx 1\end{align*}$$

## XNOR Operator

If we have the $$Θ^{(1)}$$ matrices below for AND, NOR, OR:

- AND: $$\Theta^{(1)} =\begin{bmatrix}-30 & 20 & 20\end{bmatrix}$$
- NOR: $$\Theta^{(1)} = \begin{bmatrix}10 & -20 & -20\end{bmatrix}$$
- OR: $$\Theta^{(1)} = \begin{bmatrix}-10 & 20 & 20\end{bmatrix}$$

So the XNOR can obtained with:

$$\begin{align*}\begin{bmatrix}x_0 \newline x_1 \newline x_2\end{bmatrix} \rightarrow\begin{bmatrix}a_1^{(2)} \newline a_2^{(2)} \end{bmatrix} \rightarrow\begin{bmatrix}a^{(3)}\end{bmatrix} \rightarrow h_\Theta(x)\end{align*}$$

The transition between the 1st and 2nd layer (combining AND and NOR):

- $$\Theta^{(1)} =\begin{bmatrix}-30 & 20 & 20 \newline 10 & -20 & -20\end{bmatrix}$$

The Transition between the 2nd and 3rd layer (using OR):

- $$\Theta^{(2)} =\begin{bmatrix}-10 & 20 & 20\end{bmatrix}$$

So values for all the nodes are:

- $$a^{(2)} = g(\Theta^{(1)} \cdot x)$$
- $$a^{(3)} = g(\Theta^{(2)} \cdot a^{(2)})$$
- $$h_\Theta(x) = a^{(3)}$$

A bit more detailed version:

- 1st layer to 2nd layer:

  - $$\{+1, x_1, x_2\}$$:

    - $$\Rightarrow a_1^{(2)}$$ AND: $$\Theta^{(1)} =\begin{bmatrix}-30 & 20 & 20\end{bmatrix}$$.

    - $$\Rightarrow a_2^{(2)}$$ NOR: $$\Theta^{(1)} = \begin{bmatrix}10 & -20 & -20\end{bmatrix}$$.

- 2nd layer to 3rd layer:
  - $$\{+1, x_1, x_2\} \Rightarrow $$ OR: $$\Theta^{(2)} =\begin{bmatrix}-10 & 20 & 20\end{bmatrix}$$.

## Multiclass: One-vs-all

First need to define a set of resulting classes as $$y$$:

$$
\begin{align*}
\begin{bmatrix}1 \newline 0 \newline 0 \newline 0 
\end{bmatrix} 
,
\begin{bmatrix}0 \newline 1 \newline 0 \newline 0 
\end{bmatrix} 
,
\begin{bmatrix}0 \newline 0 \newline 1 \newline 0 
\end{bmatrix} 
,
\begin{bmatrix}0 \newline 0 \newline 0 \newline 1 
\end{bmatrix} 
\end{align*}
$$

Each $$y^{(i)}$$ a different entity (e.g. car, truck, etc.):

$$
\begin{align*}
\begin{bmatrix}x_0 \newline x_1 \newline x_2 \newline \dots \newline x_n 
\end{bmatrix} 
\rightarrow
\begin{bmatrix}a_0^{(2)} \newline a_1^{(2)} \newline a_2^{(2)} \newline \dots 
\end{bmatrix} 
\rightarrow
\begin{bmatrix}a_0^{(3)} \newline a_1^{(3)} \newline a_2^{(3)} \newline \dots 
\end{bmatrix} 
\rightarrow 
\dots 
\rightarrow 
\begin{bmatrix}h_\Theta(x)_1 \newline h_\Theta(x)_2 \newline h_\Theta(x)_3 \newline h_\Theta(x)_4 
\end{bmatrix} 
\end{align*}
$$

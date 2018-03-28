---
layout: post
title:  "Coursera - Machine Learning - Notes: Week 2 - Linear Regression"
date:   2018-02-17 11:11:11 -0500
categories: coursera machine learning linear regression multivariate normal equation
---

Content

* TOC
{:toc}

# Multivariate Linear Regression

With multiple variables, we need to define new terms:

- $$m$$: the number of training examples.
- $$n$$: the number of features.
- $$x_j^{(i)}$$: value of feature $$j$$ in the $$i^{th}$$ training example.
- $$x^{(i)}$$: the input (features) of the $$i^{th}$$ training example.

The hypothesis function or predicator now looks like: $$h_\theta (x) = \theta_0 + \theta_1 x_1 + \theta_2 x_2 + \theta_3 x_3 + \cdots + \theta_n x_n$$

Which translated into a matrix formulation gives:
$$\begin{align*}h_\theta(x) =\begin{bmatrix}\theta_0 \hspace{2em} \theta_1 \hspace{2em} ... \hspace{2em} \theta_n\end{bmatrix}\begin{bmatrix}x_0 \newline x_1 \newline \vdots \newline x_n\end{bmatrix}= \theta^T x\end{align*}$$

# Multivariate Gradient Descent Algorithm

- Repeat until convergence:

  - For $$j$$ from $$0$$ to $$n$$:
    - $$\theta_j = \theta_j - \alpha \frac{1}{m} \sum\limits_{i=1}^{m} \left[ \left(h_\theta(x^{(i)}) - y^{(i)}\right) \cdot x_j^{(i)} \right]$$

## Feature Scaling and Mean Normalization
Speed up the algorithm execution by having each of our input values in roughly the same range.

### Feature Scaling
Dividing the input values by the range (i.e. the maximum value minus the minimum value) of the input variable, resulting in a new range of just $$1$$.

### Mean Normalization
Subtracting the average value for an input variable from the values for that input variable resulting in a new average value for the input variable of just zero.

### Application

To apply both techniques above: 

$$x_i = \dfrac{x_i - \mu_i}{s_i}$$

Where:

- $$\mu$$: average of all the values for the feature $$(i)$$.
- $$s_i$$: range of values ($$max$$ - $$min$$), the standard deviation.

# Polynomial Regression

The hypothesis function need not be linear if that does not fit the data well.

We can change the behavior or curve of our hypothesis function by making it a quadratic, cubic or square root function (or any other form).

Just bear in mind that the feature scaling has to be changed accordingly to the hypothesis function.

# Normal Equation

Gradient descent gives one way of minimizing $$J$$. But we can also this time performing the minimization explicitly and without resorting to an iterative algorithm.

In the "Normal Equation" method, we will minimize J by explicitly taking its derivatives with respect to the $$\theta_j$$’s, and setting them to zero.

So without any iterative process we can get the optimum: $$\theta = \left(X^T X\right)^{-1}X^T y$$.

# Comparison Gradient Descent / Normal Equation

|-------------------------------+-----------------------------------------------------------------|
|         Gradient Descent      |                           Normal Equation                       |
|:------------------------------|----------------------------------------------------------------:|
| Need to choose alpha          | No need to choose alpha                                         |
| Need many iterations          | No need to iterate                                              |
| $$\mathcal{O}\left(k \cdot n^2\right)$$  | $$\mathcal{O}\left(n^3\right)$$ case need to calculate inverse of $$X^TX$$ |
| Works well if $$n$$ is large  | Slow if $$n$$ is large                                          |

Example:

- $$x_1$$: Size $$\left(feet^2\right)$$.
- $$x_2$$: Bedroom count.
- $$x_3$$: Floor count.
- $$x_4$$: Age.
- $$y$$: Price (1,000).

|-----------------------------+----------------------------|
| $$x_0$$ | $$x_1$$ | $$x_2$$ | $$x_3$$ | $$x_4$$ | $$y$$  | 
|:----------------------------|---------------------------:|
| 1       | 2104    | 5       | 1       | 45      | 460    |
| 1       | 1416    | 3       | 2       | 40      | 232    |
| 1       | 1534    | 3       | 2       | 30      | 315    |
| 1       | 852     | 2       | 2       | 36      | 178    |

Is equivalent to:

- $$ X = \begin{bmatrix} 
1 & 2104 & 5 & 1 & 45 \newline 
1 & 1416 & 3 & 2 & 40 \newline 
1 & 1534 & 3 & 2 & 30 \newline 
1 & 852 & 2 & 2 & 36 \newline 
\end{bmatrix}$$
- $$ y = \begin{bmatrix}
460 \newline 
232 \newline 
315 \newline 
178 \newline 
\end{bmatrix}$$
- $$ \theta = \left(X^T X\right)^{-1}X^T y $$

# Normal Equation Noninvertibility

If $$X^TX$$ is noninvertible, the common causes might be having:

- Redundant features, where two features are very closely related (i.e. they are linearly dependent)
- Too many features (e.g. $$m \leq n$$). In this case, delete some features or use "regularization".

# Matlab / Octave

## Vectorization

Matlab and Octave are optimized for operations involving matrices and vectors. The process of revising loop-based, scalar-oriented code to use matrix and vector operations is called vectorization. Vectorizing your code is worthwhile for several reasons:

- Appearance: Vectorized mathematical code appears more like the mathematical expressions found in textbooks, making the code easier to understand.
- Less Error Prone: Without loops, vectorized code is often shorter. Fewer lines of code mean fewer opportunities to introduce programming errors.
- Performance: Vectorized code often runs much faster than the corresponding code containing loops.

Example:

{% highlight matlab linenos %}

% Non-vectorized stuff
i = 0;
for t = 0 : .01 : 10
    i = i + 1;
    y(i) = sin(t);
end

% Same as above but vectorized
t = 0 : .01 : 10;
y = sin(t);

{% endhighlight %}

## Cost Function

{% highlight matlab linenos %}

function J = computeCost(X, y, theta)

% number of training examples
m = length(y); 
h = X * theta; 
J = 1 / (2 * m) * sum((h - y).^2);

end

{% endhighlight %}

## Linear Gradient Descent

{% highlight matlab linenos %}

function [theta, J_history] = gradientDescentMulti(X, y, theta, alpha, num_iters)
m = length(y);
J_history = zeros(num_iters, 1);

for iter = 1:num_iters

    h = X * theta;
    theta = theta - alpha * (1/m) * (X' * ((h - y)));
    J_history(iter) = computeCost(X, y, theta);

end

end

{% endhighlight %}

## Normal Equation

{% highlight matlab linenos %}

function [theta] = normalEqn(X, y)

theta = zeros(size(X, 2), 1);

theta = pinv(X' * X) * X' * y;

end

{% endhighlight %}

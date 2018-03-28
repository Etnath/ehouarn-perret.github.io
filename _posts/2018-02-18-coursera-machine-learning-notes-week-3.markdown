---
layout: post
title:  "Coursera - Machine Learning - Notes: Week 3 - Logistic Regression"
date:   2018-02-18 11:11:11 -0500
categories: coursera machine learning logistic regression
---

Content

* TOC
{:toc}

# Classification and Representation
Linear Regression does not work (obviously) since classification is a not a linear function.

## Binary Classification
- Only two values: $$y \in \{0, 1\}$$.
- 0: negative class (also noted "$$-$$").
- 1: positive class (also noted "$$+$$").
- $$y^{(i)}$$: also called label for the training example.

## Hypothesis Representation
- Need to change our past $$h_\theta(x)$$ definition to better fit the discrete values, to satisify: $$0 \leq h_\theta(x) \leq 1$$.

- The new form is a "sigmoid" (also called "logistic") function: 
  - $$h_\theta (x) = g ( \theta^T x )$$
  - $$z = \theta^T x$$
  - $$g(z) = \dfrac{1}{1 + e^{-z}}$$
- $$h_\theta (x)$$ gives the probability such as the output is equal to $$1$$:
  - $$h_\theta(x) = P(y=1 | x ; \theta) = 1 - P(y=0 | x ; \theta)$$
  - $$P(y = 0 | x;\theta) + P(y = 1 | x ; \theta) = 1$$

## Decision Boundary
- Line separates the area where $$y = 0$$ and $$y = 1$$.
- For the sigmoid function we can say that :
  - $$g(z) \geq 0.5 \Leftrightarrow z \geq 0$$.

Considering that:

- $$z = 0, e^{0} = 1 \Leftrightarrow g(z) = 0.5$$.

- $$\lim \limits_{z \to + \infty} e^{-z} = 0 \Leftrightarrow \lim \limits_{z \to + \infty} g(z) = 1$$.

- $$\lim \limits_{z \to -\infty} e^{-z} = \infty \Leftrightarrow \lim \limits_{z \to -\infty} g(z) = 0$$.

Hence if $$z = \theta^T X$$ then: 

- $$h_\theta(x) = g(\theta^T x) \geq 0.5$$.
- When $$\theta^T x \geq 0$$.

Therefore:

- $$\theta^T x \geq 0 \Leftrightarrow y = 1$$.
- $$\theta^T x \lt 0 \Leftrightarrow y = 0$$ .

The input of the sigmoid function does not have to be linear, could be a function that describe a circle (e.g. $$z = \theta_0 + \theta_1 x_1^2 +\theta_2 x_2^2$$) or any other shape that fits the data.


# Logistic Regression Model

## Cost Function

The cost function cannot be like for the linear regression since it would result into something non-convex and wavy with many local optima (due to the logistic function).

Instead we have:

- $$J(\theta) = \dfrac{1}{m} \sum_{i=1}^m \mathrm{Cost}(h_\theta(x^{(i)}), y^{(i)}) $$
- $$\begin{cases} 
y = 1 \; & \mathrm{Cost}(h_\theta(x),y) = -\log(h_\theta(x)) \\ 
y = 0 \; & \mathrm{Cost}(h_\theta(x),y) = -\log(1 - h_\theta(x)) 
\end{cases}$$

Therefore:

- $$\mathrm{Cost}(h_\theta(x),y) = 0$$ if $$h_\theta(x) = y$$.

- When $$y = 0$$ then $$\lim \limits_{h_\theta(x) \to 1} \mathrm{Cost}(h_\theta(x),y) = + \infty$$.

- When $$y = 1$$ then $$\lim \limits_{h_\theta(x) \to 0} \mathrm{Cost}(h_\theta(x),y) = + \infty$$.

Note: that writing the cost function in this way guarantees that $$J(\theta)$$ is convex for logistic regression.


## Simplified Cost Function and Gradient Descent

### Simplified Cost Function

We can rewrite the cost function's two conditional cases into one case:    

$$\mathrm{Cost}(h_\theta(x),y) = - y \; \log(h_\theta(x)) - (1 - y) \log(1 - h_\theta(x))$$.

Hence:  

$$J(\theta) = - \frac{1}{m} \cdot \sum_{i=1}^m \left[y^{(i)}\log \left(h_\theta \left(x^{(i)}\right)\right) + \left(1 - y^{(i)}\right)\log \left(1 - h_\theta\left(x^{(i)}\right)\right)\right]$$

A vectorized implementation is:

- $$h = g(X\theta)$$
- $$J(\theta) = \frac{1}{m} \cdot \left(-y^{T}\log(h)-(1-y)^{T}\log(1-h)\right)$$


### Gradient Descent

- Repeat until convergence:

  - For $$j$$ from $$0$$ to $$n$$:
    - $$\theta_j = \theta_j - \alpha \cdot\frac{\partial}{\partial \theta_j} J(\theta)$$


If we use: 

$$\theta \cdot x^i = \sum_{i=1}^p \theta_i \cdot x^i$$

Knowing that:

- $$(1): \log \left(h_\theta(x^i)\right) = \log \left(\frac{1}{1+ e^{-\theta.x^i}}\right)$$  
  - $$\Rightarrow - \log \left(1 + e^{-\theta \cdot x^i}\right) $$

- $$(2): \log \left(1 - h_\theta(x^i)\right) = \log \left(1 - \frac{1}{1+ e^{-\theta.x^i}}\right)$$  
  - $$ \Leftrightarrow \log \left(e^{-\theta.x^i}\right) - \log \left(1 + e^{-\theta.x^i}\right)$$  
  - $$\Rightarrow - \theta \cdot x^i - \log \left(1 + e^{-\theta \cdot x^i}\right)$$

Using $$(1)$$ and $$(2)$$ into $$J(\theta)$$:

- $$J(\theta) = - \frac{1}{m} \sum_{i=1}^m \left[-y^{(i)}\log \cdot \left(1 + e^{-\theta \cdot x^i}\right) + \left(1 - y^{(i)}\right) \cdot \left(- \theta \cdot x^i - \log \left(1 + e^{-\theta \cdot x^i}\right)\right)\right]$$

- $$J(\theta) = - \frac{1}{m} \sum_{i=1}^m \left[y^{(i)} \cdot \theta \cdot x^i - \theta \cdot x^i - \log \left(1 + e^{-\theta \cdot x^i}\right) \right]$$ 

- $$J(\theta) = - \frac{1}{m} \sum_{i=1}^m \left[y^{(i)} \cdot \theta \cdot x^i - \log \left(e^{\theta \cdot x^i}\right) - \log \left(1 + e^{-\theta \cdot x^i}\right) \right]$$ 

- $$J(\theta) = - \frac{1}{m} \sum_{i=1}^m \left[y^{(i)} \cdot \theta \cdot x^i - \log \left(1 + e^{\theta \cdot x^i}\right) \right]$$ 

Then we take care of the differentation:

$$ \begin{cases} 
\frac{\partial}{\partial \theta_j} y^i \cdot \theta \cdot x^i = y^i \cdot x^i_j \\ 
\frac{\partial}{\partial \theta_j} \left(1 + e^{\theta \cdot x^i}\right) = \frac{x^i_j \cdot e^{\theta \cdot x^i}}{1 + e^{\theta \cdot x^i}} = x^i_j \cdot h_\theta(x^i) 
\end{cases}$$

That gives us the following gradient descent:

- Repeat until convergence:

  - For $$j$$ from $$0$$ to $$n$$:
    - $$\theta_j = \theta_j - \alpha \frac{1}{m} \sum\limits_{i=1}^{m} \left[ \left(h_\theta(x^{(i)}) - y^{(i)}\right) \cdot x_j^{(i)} \right]$$

Which is the same form that the one used for linear regression, except that $$h_\theta \left(x^i \right)$$ is not the same for logistic regression.

A vectorized implementation is: $$\theta = \theta - \frac{\alpha}{m} X^{T} (g(X \theta ) - y)$$

## Advanced Optimization

There are other techniques that can be used to optimize $$\theta$$ and are much faster:

- [Conjugate Gradient][Conjugate Gradient]
- [BFGS][BFGS]
- [L-BFGS][L-BFGS]

We can use the `fminunc` and `optimset` functions to setup a fastest way to get theta.

Example:

{% highlight matlab linenos %}

options = optimset('GradObj', 'on', 'MaxIter', 100);
initialTheta = zeros(2,1);
[optTheta, functionVal, exitFlag] = fminunc(@costFunction, initialTheta, options);

{% endhighlight %}

# Multiclass Classification: On-vs-all

Approach the classification of data when we have more than two categories. Instead of y = {0,1} we will expand our definition so that $$y = \{0, 1, \dots, n$$\}.

We divide our problem into $$n + 1$$  ($$+ 1$$ because the index starts at $$0$$) binary classification problems; in each one, we predict the probability that $$y$$ is a member of one of our classes:

- $$h_\theta^{(0)}(x) = P(y = 0 | x; \theta)$$
- $$h_\theta^{(1)}(x) = P(y = 1 | x; \theta)$$
- $$\dots$$
- $$h_\theta^{(n)}(x) = P(y = n | x; \theta)$$
- $$prediction = \max_i \left( h_\theta ^{(i)}(x) \right)$$

The result is the class that maximimes $$h_\theta(x)$$.

# Solving the Problem of Overfitting

A couple of defitions:

- Overfittig: high variance, the hypothesis function does not generalize well to new data. It can be due to too many features or a too complicated hypothesis function.
- Underfitting: high bias, the hypothesis function does not even map the input data. It can be caused by too few features or a too simple function.

Two options to address overfitting:

- Reduce the number features
  - Manually select which features to keep.
  - Model Selection Algorithm.
- Regularization:
  - Keep all the features but reduce the magnitude of parameters $$\theta_j$$.
  - Works well when each feature has small impact on the hypothesis function.

## Linear Regression

### Gradient Descent

- Repeat until convergence:

  - $$\theta_0 = \theta_0 - \alpha \cdot \frac{1}{m} \sum\limits_{i=1}^{m} \left[ \left(h_\theta(x^{(i)}) - y^{(i)}\right) \cdot x_0^{(i)} \right]$$

  - For $$j$$ from $$1$$ to $$n$$:

    - $$\theta_j = \theta_j - \alpha\ \cdot \left[ \left( \frac{1}{m}\ \cdot \sum\limits_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) \cdot  x_j^{(i)} \right) + \frac{\lambda}{m} \cdot \theta_j \right]$$
    - Equivalent to: $$\theta_j \left(1 - \alpha \cdot \frac{\lambda}{m}\right) - \alpha\frac{1}{m} \cdot \sum\limits_{i=1}^{m} \left[\left(h_\theta(x^{(i)}) - y^{(i)} \right)x_j^{(i)}\right]$$


### Normal Equation

$$\theta = \left( X^TX + \lambda \cdot L \right)^{-1} X^Ty$$

Where $$ L = \begin{bmatrix} 0 & & & & \newline & 1 & & & \newline & & 1 & & \newline & & & \ddots & \newline & & & & 1 \newline\end{bmatrix}$$

## Logistic Regression


$$J(\theta) = - \frac{1}{m} \cdot \sum\limits_{i=1}^{m} \left[ y^{(i)}\ \cdot \log \left(h_\theta (x^{(i)})\right) + (1 - y^{(i)})\ \cdot \log \left(1 - h_\theta(x^{(i)})\right)\right] + \cdot \frac{\lambda}{2m}\sum\limits_{j=1}^{n} \theta_j^2$$

# Matlab / Octave

## Sigmoid

{% highlight matlab linenos %}

function g = sigmoid(z)

g = zeros(size(z));

g = 1 ./ (1 + exp(-z))

end

{% endhighlight %}


## Prediction

{% highlight matlab linenos %}

function p = predict(theta, X)

m = size(X, 1); 

p = zeros(m, 1);

p = sigmoid(X * theta) >= 0.5 ;

end

{% endhighlight %}

## Cost Function

## Non regularized

{% highlight matlab linenos %}

function [J, grad] = costFunction(theta, X, y)

m = length(y);
J = 0;
grad = zeros(size(theta));

h = sigmoid(X * theta);
J = (1 / m) * (-y' * log(h) - (1 - y)' * log(1 - h));
grad = (1 / m) * ((h - y)' * X);

end

{% endhighlight %}

## Regularized

{% highlight matlab linenos %}

function [J, grad] = costFunctionReg(theta, X, y, lambda)

m = length(y);
J = 0;
grad = zeros(size(theta));

h = sigmoid(X * theta);
Jreg = (lambda / (2 * m)) * sum(theta(2 : length(theta)).^2);
J = (1 / m) * (-y' * log(h) - (1 - y)' * log(1 - h)) + Jreg;

grad = (1 / m) * ((h - y)' * X);
gradReg = (lambda / m) * theta(2 : length(theta))';
grad(:, 2 : length(grad)) = grad(:, 2 : length(grad)) + gradReg;

end

{% endhighlight %}


[L-BFGS]: https://en.wikipedia.org/wiki/Limited-memory_BFGS
[BFGS]: https://en.wikipedia.org/wiki/Broyden%E2%80%93Fletcher%E2%80%93Goldfarb%E2%80%93Shanno_algorithm
[Conjugate Gradient]: https://en.wikipedia.org/wiki/Conjugate_gradient_method


---
layout: post
title:  "Coursera - Machine Learning - Notes: Week 1 - Introduction"
date:   2018-02-16 11:11:11 -0500
categories: coursera machine learning introduction linear regression univariate
---

Content

* TOC
{:toc}

# Introduction

## Definitions

### Informal

> To give computers the ability to learn without being explicitly programmed.

### Formal Definitions

> A computer program is said to learn from **experience E** with respect to some class of **tasks T** and **performance measure P**, if its performance at tasks in T, as measured by P, improves with experience E.

## Categories of Learning

### Supervised
> Given a data set and **already know what our correct output** should look like, having the idea that there is a relationship between the input and the output.

- Regression: continuous output.
- Classification: discrete output.

### Unsupervised
> To approach problems with little or no idea what our results should look like.

- Clustering: group data into groups that are somehow similar or related by different variables.
- Non-clustering: find structure in a chaotic environment.

# Model and Cost Function

## Model Representation

- Training Example: $$\left(x^{(i)}, y^{(i)}\right)$$.

- Training Set ($$m$$ samples): $$\left(x^{(i)}, y^{(i)}\right);i=1,\ldots,m$$.

- Space of input values: $$X$$.

- Space of output values: $$Y$$.

- Predicator $$h: X \rightarrow Y$$.

## Cost Function

- Mean Squared Error: $$J(\theta) = \dfrac {1}{2m} \displaystyle \sum _{i=1}^m \left ( \hat{y}_{i}- y_{i} \right)^2 = \dfrac {1}{2m} \displaystyle \sum _{i=1}^m \left (h_\theta (x_{i}) - y_{i} \right)^2$$.

- Notes:
  - The $$\frac{1}{m}$$ portion is so that the cost is scaled to a per-example basis. Later in the course we will be comparing the cost value for different sizes of training sets.

  - The $$\frac{1}{2}$$ portion is a calculus trick, so that it will cancel with the $$2$$ which appears in the numerator when we later on will compute partial derivatives. This saves us a computation in the cost function.

- When the situation is univariate: $$h_{\theta}(x^{(i)})=\theta_0 + \theta_1 \cdot x^{(i)}$$.

- Purpose: (still in a univariate situation), choose $$\theta_0, \theta_1$$ so that the computed output $$h_{\theta}(x)=\hat{y}$$ is close to the training samples $$(x, y)$$ (and hence diminish $$J(\theta_0, \theta_1)$$.

- Visualisation: can plot $$h_{\theta}(x)$$ and contour of $$J(\theta)$$ to see miniminum. 

# Gradient Descent

## Univariate Algorithm

- Repeat until convergence:

  - $$temp0 = \theta_0 - \alpha \cdot \frac{\partial}{\partial \theta_0} J(\theta_0, \theta_1)$$
  - $$temp1 = \theta_1 - \alpha \cdot \frac{\partial}{\partial \theta_1} J(\theta_0, \theta_1)$$
  - $$\theta_0 = temp0$$
  - $$\theta_1 = temp1$$

## Notes

- Step size $$\alpha$$ (learning rate):
  - Too small: the gradient descent can be too slow.
  - Too big: the gradient descent can diverge.
- Convergence: when reach a **local minimum**.

## Application to the Univariate Linear Regression

- $$\theta_0 - \alpha \cdot \frac{\partial}{\partial \theta_0} J(\theta_0, \theta_1)$$
- $$\theta_1 - \alpha \cdot \frac{\partial}{\partial \theta_1} J(\theta_0, \theta_1)$$

- Knowing that for one single example:
  - $$\frac{\partial}{\partial \theta_j} J(\theta)=\frac{\partial}{\partial \theta_j} \frac{1}{2} \cdot (h_{\theta}(x) - y)^2$$
  - Using the [Chain Rule Differentation][Chain Rule Differentation] $$F(x) = f(g(\theta_j))$$:

    - Such as: $$\begin{cases} g(\theta_j) = h_\theta(x) - y \\ f\left(g(\theta_j)\right) = \frac{1}{2} g(\theta_j)^2 \end{cases}$$

    - Therefore: $$\begin{cases} g'(\theta_j) = \frac{\partial}{\partial \theta_j} (h_\theta(x) - y) \\ f'\left(g(\theta_j)\right)= 2 \frac{1}{2} g'(\theta_j) \end{cases}$$

  - Considering that $$F'(\theta_j)=f'\left(g(\theta_j)\right).g'(\theta_j)$$

  - We then end up with: $$ \Leftrightarrow 2 \cdot \frac{1}{2} \cdot (h_{\theta}(x) - y) \cdot \frac{\partial}{\partial \theta_j} (h_{\theta}(x) - y) $$
  - $$ \Leftrightarrow (h_{\theta}(x) - y) \cdot \frac{\partial}{\partial \theta_j} \left(\sum_{i=0}^{n} \theta_i x_i - y \right) $$
  - Since for every $$i \neq j$$ the derivative of $$\frac{\partial}{\partial \theta_j} \left( \sum\limits_{i=0}^{n} \theta_i x_i - y \right)$$ is equal to $$0$$: 
    - $$\frac{\partial}{\partial \theta_j}\left(\sum_{i=0}^{n} \theta_i x_i - y\right)$$ 
    - $$\frac{\partial}{\partial \theta_j}\left(\sum_{i \neq j}^{n} \theta_i x_i - y\right) + \frac{\partial}{\partial \theta_j} (\theta_j x_j - y) $$
    - $$ 0 +  \frac{\partial}{\partial \theta_j} (\theta_j x_j - y) $$
    - $$x_j$$
  - $$ \Rightarrow (h_{\theta}(x) - y) \cdot x_j$$

So we can deduce that when applied to the linear regression for $$m$$ samples:

- $$temp0 = \theta_0 - \alpha \cdot \frac{\partial}{\partial \theta_0} J(\theta_0, \theta_1) = \theta_0 - \alpha \cdot \frac{1}{m} \sum_{i = 1}^{m}\left(h_\theta(x_i) - y_i \right) $$

- $$temp1 = \theta_0 - \alpha \cdot \frac{\partial}{\partial \theta_0} J(\theta_0, \theta_1) = \theta_0 - \alpha \cdot \frac{1}{m} \sum_{i = 1}^{m} \left((h_\theta(x_i) - y_i) \cdot x_i \right) $$

# Linear Algebra Review

## Matrices and Vectors

Matrices are 2D arrays, example:
$$\begin{bmatrix} a & b & c \newline d & e & f \newline g & h & i \newline j & k & l\end{bmatrix}$$

Vectors are 1D arrays (subsets of matrices), example:
$$\begin{bmatrix} w \newline x \newline y \newline z \end{bmatrix}$$

### Notations

- $$A_{ij}$$: element in the $$i^th$$ row and $$j^th$$ column of the matrix $$A$$.
- $$v_{i}$$: element in the $$i^th$$ row. 
- Matrices are denoted with uppercase and vectors lowercase.
- Index:
  - Math-wise: matrices are 1-based.
  - Programming-wise: matrices are 0-based.
- Scalar: single value, not a matrix or vector.

#### Example

{% highlight matlab linenos %}

% The ; denotes we are going back to a new row.
A = [1, 2, 3; 4, 5, 6; 7, 8, 9; 10, 11, 12]

% Initialize a vector 
v = [1; 2; 3] 

% Get the dimension of the matrix A where m = rows and n = columns
[m, n] = size(A)

% You could also store it this way
dim_A = size(A)

% Get the dimension of the vector v 
dim_v = size(v)

% Now let's index into the 2nd row 3rd column of matrix A
A_23 = A(2, 3)

{% endhighlight %}

### Matrix and Scalar Operations

Operations are element-wise and commutative:

- $$ \begin{bmatrix} a & b \newline c & d \newline \end{bmatrix} + x =\begin{bmatrix} a + x & b + x \newline c + x & d + x \newline \end{bmatrix} $$

- $$ \begin{bmatrix} a & b \newline c & d \newline \end{bmatrix} - x =\begin{bmatrix} a - x & b - x \newline c - x & d - x \newline \end{bmatrix} $$

- $$ \begin{bmatrix} a & b \newline c & d \newline \end{bmatrix} \cdot x =\begin{bmatrix} a \cdot x & b \cdot x \newline c \cdot x & d \cdot x \newline \end{bmatrix} $$

- $$ \begin{bmatrix} a & b \newline c & d \newline \end{bmatrix} / x =\begin{bmatrix} a /x & b/x \newline c /x & d /x \newline \end{bmatrix} $$

#### Example

{% highlight matlab linenos %}

% Initialize matrix A and B 
A = [1, 2, 4; 5, 3, 2]

% Initialize constant s 
s = 2

% See how scalar multiplication works
mult_As = A * s

% Divide A by s
div_As = A / s

% What happens if we have a Matrix + scalar?
add_As = A + s

% What happens if we have a Matrix - scalar?
sub_As = A + s

{% endhighlight %}

### Matrix and Matrix Operations

#### Addition and subtraction 
Element-wise upon the conditions that they are the same size:

- $$\begin{bmatrix} a & b \newline c & d \newline \end{bmatrix} +\begin{bmatrix} w & x \newline y & z \newline \end{bmatrix} =\begin{bmatrix} a+w & b+x \newline c+y & d+z \newline \end{bmatrix}$$

- $$\begin{bmatrix} a & b \newline c & d \newline \end{bmatrix} - \begin{bmatrix} w & x \newline y & z \newline \end{bmatrix} =\begin{bmatrix} a-w & b-x \newline c-y & d-z \newline \end{bmatrix}$$

#### Multiplication
An $$m \times n$$ matrix multiplied by an $$n \times o$$ matrix results in an $$m \times o$$ matrix, this operation is not commutative but associative:

- $$\begin{bmatrix} a & b \newline c & d \newline e & f \end{bmatrix} \cdot \begin{bmatrix} w & x \newline y & z \newline \end{bmatrix} =\begin{bmatrix} a \cdot w + b \cdot y & a \cdot x + b \cdot z \newline c \cdot w + d \cdot y & c \cdot x + d \cdot z \newline e \cdot w + f \cdot y & e \cdot x + f \cdot z\end{bmatrix}$$

#### Identity Matrix 
When multiplied by any matrix of the same dimensions, results in the original matrix. It's just like multiplying numbers by 1. The identity matrix simply has 1's on the diagonal (upper left to lower right diagonal) and 0's elsewhere.

- $$\begin{bmatrix} 1 & 0 & 0 \newline 0 & 1 & 0 \newline 0 & 0 & 1 \newline \end{bmatrix}$$

#### Transposition
It's like rotating the matrix 90° in clockwise direction and then reversing it, that is $$A_{ij} = A^T_{ji}$$:

- $$A = \begin{bmatrix} a & b \newline c & d \newline e & f \end{bmatrix}$$
- $$A^T = \begin{bmatrix} a & c & e \newline b & d & f \newline \end{bmatrix}$$

#### Inverse
The inverse of a matrix $$A$$ is denoted $$A^−1$$. 
Multiplying by the inverse results in the identity matrix.

#### Example

{% highlight matlab linenos %}

% Initialize matrix A and B 
A = [1, 2, 4; 5, 3, 2]
B = [1, 3, 4; 1, 1, 1]

% See how element-wise addition works
add_AB = A + B 

% See how element-wise subtraction works
sub_AB = A - B

% Reinitialize A with a 3 by 2 mat

{% endhighlight %}

#### Transposition
It's like rotating the matrix 90° in clockwise direction and then reversing it, that is $$A_{ij} = A^T_{ji}$$:

- $$A = \begin{bmatrix} a & b \newline c & d \newline e & f \end{bmatrix}$$
- $$A^T = \begin{bmatrix} a & c & e \newline b & d & f \newline \end{bmatrix}$$

#### Inverse
The inverse of a matrix $$A$$ is denoted $$A^−1$$. 
Multiplying by the inverse results in the identity matrix.

{% highlight matlab linenos %}

A = [1, 2; 3, 4; 5, 6]

% Reinitialize B with a 2 by 1 matrix 
B = [1; 2] 

% We expect a resulting matrix of (3 by 2)*(2 by 1) = (3 by 1) 
mult_AB = A * B

% Transpose A 
A_trans = A' 

% Take the inverse of A 
% Can also get the inverse with the pinv(A) function
% (Moore-Penrose inverse or pseudoinverse).
% Matrices that don't have an inverse are singular or degenerate.
A_inv = inv(A)

% What is A^(-1) * A? 
A_invA = inv(A) * A

{% endhighlight %}


[Chain Rule Differentation]: https://en.wikipedia.org/wiki/Chain_rule
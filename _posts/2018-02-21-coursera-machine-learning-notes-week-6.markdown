---
layout: post
title:  "Coursera - Machine Learning - Notes: Week 6 - Advices For Applying Machine Learning"
date:   2018-02-21 11:11:11 -0500
categories: coursera machine advices
---

Content

* TOC
{:toc}

# Evaluating a Learning Algorithm

## Evaluating a Hypothesis

Troubleshooting:

- Getting more training examples
- Trying smaller sets of features
- Trying additional features
- Trying polynomial features
- Increasing or decreasing $$\lambda$$

A hypothesis may have a low error for the training examples but still be inaccurate (because of overfitting). 

We can split up the data into two sets: a training set and a test set. Typically, the training set consists of 70 % of your data and the test set is the remaining 30 %. 

New procedure:

- Learn $$\Theta$$ and minimize $$J_{Train}(\Theta)$$ using the training set.
- Compute the test set error $$J_{Test}(\Theta)$$.

## The Test Set

For linear regression: 

- $$J_{Test}(\Theta) = \dfrac{1}{2m_{Test}} \sum\limits_{i=1}^{m_{Test}}(h_\Theta(x^{(i)}_{Test}) - y^{(i)}_{Test})^2$$

For classification ~ Misclassification error (aka $$0$$ / $$1$$ misclassification error):

- $$err \left(h_\Theta(x), y \right) = 
\begin{cases} 
1 & \left\{h_\Theta(x) \geq 0.5, y = 0 \right\} || \left\{h_\Theta(x) < 0.5, y = 1 \right\}\\  
0 
\end{cases}$$

This gives us a binary 0 or 1 error result based on a misclassification. The average test error for the test set is:

- $$\text{Test Error} = \dfrac{1}{m_{Test}} \sum^{m_{Test}}_{i=1} err(h_\Theta(x^{(i)}_{Test}), y^{(i)}_{test})$$

This gives us the proportion of the test data that was misclassified.

## Model Selection and Train / Validation / Test Sets

Given many models with different polynomial degrees, we can use a systematic approach to identify the 'best' function. In order to choose the model of your hypothesis, you can test each degree of polynomial and look at the error result.

One way to break down our dataset into the three sets is:

- Training Set: 60%.
- Cross validation Set: 20%.
- Test Set: 20%.

We can now calculate three separate error values for the three different sets using the following method:

- Optimize the parameters in $$\Theta$$ using the training set for each polynomial degree.
- Find the polynomial degree $$d$$ with the least error using the cross validation set.
- Estimate the generalization error using the test set with $$J_{Test}(\Theta^{(d)})$$, ($$d = \Theta $$ from polynomial with lower error).

## Diagnosing Bias vs Variance 

The **training error** will tend to **decrease** as we **increase the degree $$d$$** of the polynomial.

At the same time, the **cross validation error** will tend to **decrease** as we **increase $$d$$** up to a point, and then it will **increase as $$d$$ is increased**, forming a convex curve.

- High Bias: underfitting $$\Rightarrow$$ both $$J_{Train}(\Theta)$$ and $$J_{CV}(\Theta)$$ both high. Also $$J_{CV}(\Theta) \approx J_{train}(\Theta)$$.
- High Variance: overfitting $$\Rightarrow$$ low $$J_{Train}(\Theta)$$ while $$J_{CV}(\Theta) \gt \gt J_{Train}(\Theta)$$.

## Regularization and Bias / Variance

Example of linear Regression with regularization: 

- $$h_\theta(x) = \theta_0 + \theta_1 x + \theta_2 x^2 + \theta_3 x^3 + \theta_4 x^4$$.
- $$J(\theta) = \frac{1}{2m} \cdot \sum\limits{i = 1}^{m}\left(h_\theta(x)^{(i)} - y^{(i)} \right)^2 + \frac{1}{2m} \cdot \sum\limits{j = 1}^{n} \theta_j^2$$

Different $$\lambda$$ sizes:

- Large: High Bias, underfit (e.g. $$\lambda = 100000 \Rightarrow \theta_1 \approx 0, \theta_2 \approx 0, \dots \ Rightarrow h_\theta(x) \ approx = \theta_0$$).
- Intermediate: kinda got it right.
- Small: High Variance, overfit ($$\lambda \approx 0$$).

Get the proper $$\lambda$$:

- Create a list of lambdas:
  - E.g. $$\lambda  \left\{0, 0.01, 0.02, 0.04, 0.08,0.16, 0.32, 0.64, 1.28, 2.56, 5.12, 10.24 \right\}$$.
- Create a set of models with different degrees or any other variants.
- Iterate through the $$\lambda_s$$ and for each $$\lambda$$ go through all the models to learn some $$\Theta$$.
- Compute the cross validation error using the learned $$\Theta$$ (computed with $$\lambda$$) on the $$JCV(\Theta)$$ without regularization or $$\lambda = 0$$.
- Select the best combo that produces the lowest error on the cross validation set.
- Using the best combo $$\Theta$$ and $$\lambda$$, apply it on $$J_{Test}(\Theta$$) to see if it has a good generalization of the problem.

## Learning Curves

Training an algorithm on a very few number of data points (such as 1, 2 or 3) will easily have 0 errors because we can always find a quadratic curve that touches exactly those number of points. Hence:

- As the training set gets larger, the error for a quadratic function increases.
- The error value will plateau out after a certain m, or training set size.

### High Bias

- Small training set size: $$\Rightarrow$$ low $$J_{Train}(\Theta)$$ and high $$J_{CV}(\Theta)$$.
- Large training set size: $$\Rightarrow$$ high $$J_{Train}(\Theta)$$ and high $$J_{CV}(\Theta)$$ and $$J_{CV}(\Theta) \approx J_{train}(\Theta)$$.

If a learning algorithm is suffering from **high bias**, getting **more training data** will **not** (by itself) **help** much.

### High Variance

- Small training set size: $$\Rightarrow$$ low $$J_{Train}(\Theta)$$ and high $$J_{CV}(\Theta)$$.
- Large training set size: $$\Rightarrow$$ $$J_{Train}(\Theta)$$ increases with training set size and $$J_{CV}(\Theta)$$ continues to decreases without leveling off. $$J_{Train}(\Theta) \lt J_{CV}(\Theta)$$.

If a learning algorithm is suffering from **high variance**, getting **more training data** is likely to **help**.

## Key Takeaways

### Decision Process

- Getting more training examples: Fixes high variance.
- Trying smaller sets of features: Fixes high variance.
- Adding features: Fixes high bias.
- Adding polynomial features: Fixes high bias.
- Decreasing $$\lambda$$: Fixes high bias.
- Increasing $$\lambda$$: Fixes high variance.

### Diagnosing Neural Networks

- A neural network with fewer parameters is **prone to underfitting**. It is also **computationally cheaper**.
- A large neural network with more parameters is **prone to overfitting**. It is **also computationally expensive**. In this case you can use regularization (increase $$\lambda$$) to address the overfitting.

Using a single hidden layer is a good starting default. You can train your neural network on a number of hidden layers using your cross validation set. You can then select the one that performs best. 

### Model Complexity Effects

- **Lower-order polynomials** (low model complexity): have **high bias** and **low variance**. In this case, the model fits poorly consistently.
- **Higher-order polynomials** (high model complexity) fit the training data extremely well and the test data extremely poorly. These have **low bias** on the training data, but **very high variance**.
- In reality, we would **want** to choose a model somewhere **in between**, that can generalize well but also fits the data reasonably well.

# System Design

## Building a Spam Classifier

### Problem
Given a data set of emails, we could construct a vector for each email. Each entry in this vector represents a word. The vector normally contains 10,000 to 50,000 entries gathered by finding the most frequently used words in our data set. 

If a word is to be found in the email, we would assign its respective entry a 1, else if it is not found, that entry would be a 0. 

Once we have all our x vectors ready, we train our algorithm and finally, we could use it to classify if an email is a spam or not.

### Strategy

Category: Supervised Learning.
x = features of email.
y = spam (1) / not spam (0).


## Handling Skewed Data

## Using Large Data Sets


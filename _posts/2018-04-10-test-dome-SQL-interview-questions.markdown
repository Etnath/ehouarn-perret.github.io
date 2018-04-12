---
layout: post
title: "TestDome: SQL Interview Questions"
date: 2018-04-10 00:00:00 -0400
categories: web development jquery basics
---

Here are the solution to the interview questions about SQL on TestDome:
https://www.testdome.com/d/sql-interview-questions/17

# Students

## Problem

- Difficulty: Easy
- Time: 3 minutes

Given the following data definition, write a query that returns the number of students whose first name is John.

{% highlight sql linenos %}
TABLE students
    id INTEGER PRIMARY KEY,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL
{% endhighlight %}

## Solution

{% highlight sql linenos %}
SELECT COUNT(firstName)
FROM students
WHERE firstName = 'John';
{% endhighlight %}

# Enrollment

## Problem

A table containing the students enrolled in a yearly course has incorrect data in records with ids between 20 and 100 (inclusive).

{% highlight sql linenos %}
TABLE enrollments
    id INTEGER NOT NULL PRIMARY KEY
    year INTEGER NOT NULL
    studentId INTEGER NOT NULL
{% endhighlight %}

Write a query that updates the field 'year' of every faulty record to 2015.

## Solution

{% highlight sql linenos %}
UPDATE enrollments
SET year = 2015
WHERE id BETWEEN 20 AND 100;
{% endhighlight %}

# Pets

## Problem

Information about pets is kept in two separate tables:

{% highlight sql linenos %}
TABLE dogs
    id INTEGER NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL

TABLE cats
    id INTEGER NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
{% endhighlight %}

Write a query that select all distinct pet names.

## Solution

{% highlight sql linenos %}
SELECT DISTINCT(name) FROM dogs
UNION
SELECT DISTINCT(name) FROM cats;
{% endhighlight %}

# Sessions

## Problem

App usage data are kept in the following table:

{% highlight sql linenos %}
TABLE sessions
    id INTEGER PRIMARY KEY,
    userId INTEGER NOT NULL,
    duration DECIMAL NOT NULL
{% endhighlight %}

Write a query that selects userId and average session duration for each user who has more than one session.

## Solution

{% highlight sql linenos %}
SELECT userId, AVG(duration) AS AverageDuration
FROM sessions 
GROUP BY userId
HAVING COUNT(userId) > 1;
{% endhighlight %}

# Web Shop

## Problem

Each item in a web shop belongs to a seller. To ensure service quality, each seller has a rating.

The data are kept in the following two tables:

{% highlight sql linenos %}
TABLE sellers
    id INTEGER PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    rating INTEGER NOT NULL

TABLE items
    id INTEGER PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    sellerId INTEGER REFERENCES sellers(id)
{% endhighlight %}

Write a query that selects the item name and the name of its seller for each item that belongs to a seller with a rating greater than 4.

## Solution

{% highlight sql linenos %}
SELECT items.name as Item, sellers.name as Seller  
FROM items
LEFT JOIN sellers ON items.sellerId = sellers.Id
WHERE sellers.rating > 4;
{% endhighlight %}

# User And Roles

## Problem

The following two tables are used to define users and their respective roles:

{% highlight sql linenos %}
TABLE users
    id INTEGER NOT NULL PRIMARY KEY,
    userName VARCHAR(50) NOT NULL

TABLE roles
    id INTEGER NOT NULL PRIMARY KEY,
    role VARCHAR(20) NOT NULL
{% endhighlight %}

The users_roles table should contain the mapping between each user and their roles. 

Each user can have many roles, and each role can have many users.

Improve the provided create table statement so that:

- Only users from the users table can exist within users_roles.
- Only roles from the roles table can exist within users_roles.
- A user can only have a specific role once.

## Solution

{% highlight sql linenos %}
CREATE TABLE IF NOT EXISTS users_roles (
    userId INTEGER NOT NULL,
    roleId INTEGER NOT NULL,
    FOREIGN KEY (userId) REFERENCES users (id),
    FOREIGN KEY (roleId) REFERENCES roles (id),
    PRIMARY KEY (userId, roleId)
);
{% endhighlight %}

# Workers

## Problem

The following data definition defines an organization's employee hierarchy.

An employee is a manager if any other employee has their managerId set to the first employees id. An employee who is a manager may or may not also have a manager.

{% highlight sql linenos %}
TABLE employees
    id INTEGER NOT NULL PRIMARY KEY
    managerId INTEGER REFERENCES employees(id)
    name VARCHAR(30) NOT NULL
{% endhighlight %}

Write a query that selects the names of employees who are not managers.

## Solution

{% highlight sql linenos %}
SELECT name
FROM employees
WHERE id NOT IN (
    SELECT DISTINCT(managerId) 
    FROM employees 
    WHERE managerId IS NOT NULL
);
{% endhighlight %}

---
layout:     post
title:      JavaScript Tips: How to implement TakeWhile
date:       2016-01-12
summary:    Implementation of C# Enumerable methot TakeWhile in JavaScript.
categories: JavaScript
published:  true
---

In this post I will describe the ways how [TakeWhile](https://msdn.microsoft.com/ru-ru/library/bb548775(v=vs.110).aspx) method maight be inplemented in JavaScript. I will consider 3 implementations of this function and compare their performance. 

### Specification of function takeWhile.

Lets discribe syntax of function takeWhile we are going to implement.

#### Syntax

{% gist Sufflavus/399e4454506d91924192 %}

#### Parameters
- *source* - the sequence to return elements from
- *predicate* - a function to test each source element for a condition; invoked with arguments (element, index).

#### Description
As it is specified in [documentation](https://msdn.microsoft.com/ru-ru/library/bb548775(v=vs.110).aspx), function takeWhile should return elements from a sequence as long as a specified condition is true.

#### Example

{% gist Sufflavus/a450bc8a858658e7ee37 %}

### Implementation 1: Using *while*

{% gist Sufflavus/0bc96d22e7007bc4aff7 %}

### Implementation 2: Using *for*

{% gist Sufflavus/ab836bcbec1514994f8e %}

### Implementation 3: Using *some*

{% gist Sufflavus/3a0015453a127a20f578 %}


If you find any mistakes or have any suggestions please feel free to let me know. Thanks.

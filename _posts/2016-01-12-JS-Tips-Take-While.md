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

```js
takeWhile(source, predicate)
```

#### Parameters
- *source* - the sequence to return elements from
- *predicate* - a function to test each source element for a condition; invoked with arguments (element, index).

#### Description
As it is specified in [documentation](https://msdn.microsoft.com/ru-ru/library/bb548775(v=vs.110).aspx), function takeWhile should return elements from a sequence as long as a specified condition is true.

#### Examples
...

### Implementation 1: Using *while*

{% gist Sufflavus/0bc96d22e7007bc4aff7 %}

```js
function takeWhile(source, predicate) {
    var length = source.length;
    var i = 0;

    while(i < length && predicate(source[i], i)) {
        i++;
    }

    return source.slice(0, i);
}

var source = [1, 2, 5, 0, -2, 2, 8];
var predicate = x => x > 0;
var length = source.length;

var i = 0;
while(i < length && predicate(source[i], i)) {
    i++;
}

var result = source.slice(0, i);

console.log(result);
```

### Implementation 2: Using *for*

```js
function takeWhile(source, predicate) {
    var stopIndex = source.length;

    for(var i = 0, length = source.length; i < length; i++ ) {
        if(!predicate(source[i], i)) {
            stopIndex = i;
            break;
        }
    }

    return source.slice(0, stopIndex);
}

var source = [1, 2, 5, 0, -2, 2, 8];
var predicate = x => x > 0;
var stopIndex = source.length;

for(var i = 0, length = source.length; i < length; i++ ) {
    if(!predicate(source[i], i)) {
        stopIndex = i;
        break;
    }
}

var result = source.slice(0, stopIndex);

console.log(result);
```

### Implementation 3: Using *some*

```js
function takeWhile(source, predicate) {
    var stopIndex = source.length;

    source.some(function(n, index) {
        return predicate(n, index) ? false : ((stopIndex = index), true);
    });

    return source.slice(0, stopIndex);
}

var source = [1, 2, 5, 0, -2, 2, 8];
var predicate = x => x > 0;
var stopIndex = source.length;

source.some(function(n, index) {
    return predicate(n, index) ? false : ((stopIndex = index), true);
});

var result = source.slice(0, stopIndex);

console.log(result);
```


If you find any mistakes or have any suggestions please feel free to let me know. Thanks.

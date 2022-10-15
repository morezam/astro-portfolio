---
title: 'The curious case of negative zero!'
layout: ../../layouts/blog.astro
img: /blog/negative-zero.jpg
excerpt: In this post we're going to learn what is negative zero, how to test if a value is negative zero and know its odd behaviors.You most probably never going to use negative zero but it may be good for interview questions.
publishedDate: '2022-09-02'
---

You are probably asking the same question I asked when I first encounter this topic in JavaScript. What the heck is negative zero?
In math there is no such a thing as negative zero and −0, +0 and 0 are identical. But in computing these are two separate things. In JavaScript negative zero has a really weird behavior which makes it hard to understand.

## Corner Cases

If we try to compare negative zero with normal zero ( which I'm going to call zero in whole articale ) we see that negative zero is not greater than `0`. And it is not less than zero :

```js
-0 > 0; // false
-0 < 0; // false
```

But it is bigger than equal to zero and less than equal to zero! :

```js
-0 >= 0; // true
-0 <= 0; // true
```

Let's make it weirder. Negative zero is equal to zero!!. In loose equality check and in strict equality ckeck. But it is equal to itself, Thank God! :

```js
-0 == 0; // true
-0 === 0; // true

-0 == -0; // true
-0 === -0; // true
```

Calling `toString` on it returns 0 :

```js
const negatviZero = -0;
negatviZero.toString(); // 0
```

`Math.sign()` is an utility in JavaScrip that returns `-1` if a number is negative and `1` if number is positive :

```js
Math.sign(2); // 1
Math.sign(-2); // -1
```

But as you may gussed it already, it does not work with negative zero. It returns `-0` and `0` for `-0` and `0` respectively :

```js
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign(-0) === 0; // true
```

## Determine

So how can we determine if a value is negative zero? There are multiple ways to check that. I'm going to explain 3 of them :

### 1. toLocaleString()

We saw earlier that `toString(-0)` returns 0. But `toLocaleString()` does not behave the same way. It is going to return `-0`.So we can use it to determine if a value is negative zero :

```js
const negatviZero = -0;
negatviZero.toLocaleString(); // -0
```

which we can use to create a function to check for negative zero :

```js
function isZeroNegative(zero) {
	if (zero !== 0) return false;

	return zero.toLocaleString()[0] === '-';
}
```

### 2. Negative Infinity

If we divide a number to `0` we get `Infinity`. And if we divide it to `-0` we get `-Infinity`. So we can use it to check for `-0` :

```js
1 / 0; // Infinity
1 / -0; // -Infinity
```

We can use this new knowledge to create a new function to determine if a value is `-0` or not :

```js
function isZeroNegative(zero) {
	if (zero !== 0) return false;

	const isNegative = 1 / zero === -Infinity;

	return isNegative;
}
```

### 3. Object.is()

Third way is to use `Object.is()`. It is like adding another equal sign to tripple equality check (quadruple equality check). It also checks for NaN which is not equal to itself with loose and strict equality checks.

According to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) :

> The only difference between `Object.is()` and `===` is in their treatment of signed zeros and NaN values. The === operator (and the == operator) treats the number values -0 and +0 as equal, but treats NaN as not equal to each other.

So it's a really powerful tool that we can make use of to test for negative zero :

```js
Object.is(1, 1); // true
Object.is(1, -1); // true

Object.is(NaN, NaN); // true

Object.is(0, -0); // false
Object.is(0, 0); // true
Object.is(-0, -0); // true
```

It returns true for `Object.is(0,-0)`. So we can use it in a function to check negative zero :

```js
function isZeroNegative(zero) {
	if (zero !== 0) return false;

	const isNegative = Object.is(-0, zero);

	return isNegative;
}
```

## Conclusion

You most probably never going to use negative zero, and you don't see it in other people's code base but this article written to help you be familiar with one of the weirdest topics in JavaScrip and avoid corner cases if you encounter in your code.

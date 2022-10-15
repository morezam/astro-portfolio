---
title: 'NaN: Not a Number or Invalid Number?'
layout: ../../layouts/blog.astro
img: /blog/NaN.jpg
excerpt: In JavaScript  one of the weirdest topics is NaN. It is the only thing in Javascript that does not equal to itself. In this post we're gonna see some of its weird behavior, give it a new name and show some ways to determine if a value is NaN.
publishedDate: '2022-08-22'
---

We have this thing in Javascript called NaN. Actually it's not created by JavaScript. It is invented by [IEEE](https://en.wikipedia.org/wiki/Double-precision_floating-point_format). If you have something that is not a number and use it in places that'll end up coercing it to a number you'll get NaN as result. Let me show this with an example:

```js
'hello' * 2; // NaN
```

We used `'hello'` that is not a number in a arithmatic operation (multiplication) which is going to coerce any non-number values to number (useing `toNumber()` abstract operation), and coercing `'hello'` to number ends up in `NaN`:

```js
NaN * 2; // NaN
```

Any mathematic operation with `NaN` results in `NaN`.

Minus, divide and multiply operators will try to coerce non-number values into number. And if we use a value that is not a number in these operations the result is NaN :

```js
'hello' * 2; // NaN
'hello' / 2; // NaN
'hello' - 2; // NaN
```

Plus operator will try to coerce different types to string. So if we have a number in this operation it's gonna coerce it to string:

```js
'hello' + 2; // 'hello2'
```

## Corner Cases

If you ask for NaN type using typeof operator you get "number" back:

```js
typeof NaN; // "number"
```

![](/blog/NaN-meme.jpg)

This is reasonable since you are using it in numeric operations. Like:

```js
Number('my age'); // NaN
2022 - 'last year'; // NaN
```

Wait, if its type is number why we're calling it "not a number"? well, we better start calling it invalid number. It is a number but an invalid one.

It is the only thing in Javascript that does not equal to itself (neither loose equality nor strict equality) or any other value:

```js
NaN == NaN; // false
NaN === NaN; // false

NaN === 'NaN'; // false
NaN === 2; // false
```

And doing any sort of mathematic operations with NaN is going to result in NaN

```js
NaN - NaN; // NaN
NaN - 0; // NaN
NaN - 'hello'; // NaN
```

`NaN` is also one of the falsy values in JavaScript:

```js
Boolean(NaN); // false
!!NaN; // false
```

## Testing NaN

So how we can determine if a value is NaN? We can use a built-in utility called isNaN():

```js
isNaN(2022); // false

isNaN(Number('my age')); // true

const thisYear = 'MMXXII';
isNaN(thisYear); // true
```

We know that `Number('my age')` is NaN. But what about `'MMXXII'`? Obviously, it is not a number but it is not a NaN value either. It is not NaN untill it get coerced to number and then result in NaN.

So what happened? Turns out isNAN utility [tries to coerce non-number values into number](https://tc39.es/ecma262/#sec-isnan-number), which is not the exact behavior we want.

We can use [Number.isNaN()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) method instead. [It doesn't do any coercing](https://tc39.es/ecma262/#sec-number.isnan).

```js
Number.isNaN(2022); // false

Number.isNaN(Number('my age')); // true

const thisYear = 'MMXXII';
Number.isNaN(thisYear); // false
```

We can also use `Object.is()` to test if a value is NaN or not:

```js
function isItNaN(val) {
	if (typeof val !== 'number') return false;

	return Object.is(val, NaN);
}

isItNaN(2022); // false

isItNaN(Number('my age')); // true

const thisYear = 'MMXXII';
isItNaN(thisYear); // false
```

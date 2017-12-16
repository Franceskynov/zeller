 # zeller

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]

Zeller's congruence is an algorithm devised by Christian Zeller to calculate the day of the week for any Julian or Gregorian calendar date. It can be considered to be based on the conversion between Julian day and the calendar date.

## Installation
```bash 
npm i zeller --save
```

## Usage 
This modure require three parameters for work and forth for the language


## Example

Basic example:

```javascript

let ZellersCongruence = require("zeller");

console.log(ZellersCongruence(24, 2, 1955));

```

```javascript

let ZellersCongruence = require("zeller");

console.log(ZellersCongruence(24, 2, 1955, "es"));
```

## License

(MIT License)

Copyright 2017,  franceskynov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm-version-image]: https://img.shields.io/npm/v/zeller.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/zeller.svg
[npm-url]: https://npmjs.org/package/zeller
# jstransformer-showdown

[Showdown](https://github.com/showdownjs/showdown) support for [JSTransformers](http://github.com/jstransformers).

[![NPM version](https://img.shields.io/npm/v/jstransformer-showdown.svg)](https://www.npmjs.org/package/jstransformer-showdown)
[![Build Status](https://img.shields.io/travis/mattbudish/jstransformer-showdown/master.svg)](https://travis-ci.org/mattbudish/jstransformer-showdown)
[![Coverage Status](https://img.shields.io/codecov/c/github/mattbudish/jstransformer-showdown/master.svg)](https://codecov.io/gh/mattbudish/jstransformer-showdown)
[![Known Vulnerabilities](https://snyk.io/test/github/mattbudish/jstransformer-showdown/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mattbudish/jstransformer-showdown?targetFile=package.json)

## Installation

    npm install jstransformer-showdown

## API

```js
var sd = require('jstransformer')(require('jstransformer-showdown'));

sd.render('# Hello World!').body;
//=> '<h1 id="helloworld">Hello World!</h1>'
```

## License

MIT

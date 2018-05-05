# jstransformer-showdown

[Showdown](https://github.com/showdownjs/showdown) support for [JSTransformers](http://github.com/jstransformers).

[![NPM version](https://img.shields.io/npm/v/jstransformer-showdown.svg)](https://www.npmjs.org/package/jstransformer-showdown)

## Installation

    npm install jstransformer-showdown

## API

```js
var md = require('jstransformer')(require('jstransformer-showdown'));

md.render('# Hello World!').body;
//=> '<h1 id="helloworld">Hello World!</h1>'
```

## License

MIT

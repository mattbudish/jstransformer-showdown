'use strict'

const showdown = require('showdown')

exports.name = 'showdown'
exports.outputFormat = 'html'
exports.inputFormats = ['md']

exports.render = (str, options) => {
  const converter = new showdown.Converter(options)

  return converter.makeHtml(str)
}

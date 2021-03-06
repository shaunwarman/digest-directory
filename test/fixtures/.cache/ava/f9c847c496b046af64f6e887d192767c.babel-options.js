"use strict"

const process = require("process")

const defaultOptions = envName => {
  return {
    "babelrc": false,
    "plugins": [
      "/Users/swarman/Development/Source/superfriends/digest-directory/node_modules/babel-plugin-syntax-object-rest-spread/lib/index.js"
    ],
    "presets": [
      "/Users/swarman/Development/Source/superfriends/digest-directory/node_modules/@ava/babel-preset-stage-4/index.js",
      [
        "/Users/swarman/Development/Source/superfriends/digest-directory/node_modules/@ava/babel-preset-transform-test-files/index.js",
        {
          "powerAssert": true
        }
      ]
    ]
  }
}

const envOptions = Object.create(null)

exports.getOptions = () => {
  const envName = process.env.BABEL_ENV || process.env.NODE_ENV || "development"
  return envName in envOptions
    ? envOptions[envName]()
    : defaultOptions(envName)
}

# digest-directory

[![build status](https://img.shields.io/travis/shaunwarman/digest-directory.svg)](https://travis-ci.com/shaunwarman/digest-directory)
[![code coverage](https://img.shields.io/codecov/c/github/shaunwarman/digest-directory.svg)](https://codecov.io/gh/shaunwarman/digest-directory)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/shaunwarman/digest-directory.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/digest-directory.svg)](https://npm.im/digest-directory)

> Get hash from directory content


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install digest-directory
```

[yarn][]:

```sh
yarn add digest-directory
```


## Usage

```js
const digest = require('digest-directory');

const dirpath = '/path/to/directory';

// ... in async function
const hash = await digest(dirpath);

console.log(hash);
// 62911adae73552fa3bc8691d2ca3b3e0
```


## Contributors

| Name             | Website                   |
| ---------------- | ------------------------- |
| **Shaun Warman** | <https://shaunwarman.com> |


## License

[MIT](LICENSE) © [Shaun Warman](https://shaunwarman.com)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/

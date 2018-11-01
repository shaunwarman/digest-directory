const path = require('path');
const test = require('ava');

const digest = require('..');

test('init', t => {
  t.true(typeof digest === 'function');
});

test('bad input', async t => {
  try {
    await digest(1);
  } catch (err) {
    t.true(err.message === 'directory path must be a string!');
  }
});

test('digest', async t => {
  const dirpath = path.resolve(path.join(__dirname, 'fixtures'));
  const hash = await digest(dirpath);
  t.true(hash === 'bdc73d5cb6ce0081827206c703bf125c');
});

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

test('filter bad input', async t => {
  try {
    const dirpath = path.resolve(path.join(__dirname, 'fixtures'));
    await digest(dirpath, 1);
  } catch (err) {
    t.true(err.message === 'filter must be a function or null!');
  }
});

test('filter', async t => {
  const dirpath = path.resolve(path.join(__dirname, 'fixtures'));
  const hash = await digest(
    dirpath,
    fileName => !fileName.endsWith('d537ba55f0aa22c168c04f0e0c636682.js')
  );
  t.true(hash === 'e4fa008f3d92c675c7069f3b95ff3827');
});

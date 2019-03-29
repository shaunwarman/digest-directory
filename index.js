const assert = require('assert');
const crypto = require('crypto');
const digest = require('file-digest');
const readdir = require('recursive-readdir');

module.exports = async (dirpath, filter = null) => {
  assert(typeof dirpath === 'string', 'directory path must be a string!');
  assert(
    filter === null || typeof filter === 'function',
    'filter must be a function or null!'
  );

  const hash = crypto.createHash('md5');

  let files = await readdir(dirpath);
  files = files.sort();

  for (const file of files) {
    if (!filter || filter(file)) {
      const fileHash = digest(file);
      hash.update(fileHash);
    }
  }

  return hash.digest().toString('hex');
};

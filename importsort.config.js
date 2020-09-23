module.exports = {
  '.ts .tsx': {
    parser: 'typescript',
    style: 'eslint',
  },
  '.js, .jsx': {
    parser: 'babylon',
    style: 'eslint',
  },
};

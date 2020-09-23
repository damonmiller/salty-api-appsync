module.exports = {
  'package.json': ['sort-package-json'],
  '.editorconfig': ['prettier --write'],
  '**/*.{css,gql,graphql,html,json,less,md,mdx,scss,vue,yaml,yml}': ['prettier --write'],
  '**/*.{ts,tsx,js,jsx}': ['prettier --write', 'eslint --cache --fix'],
};

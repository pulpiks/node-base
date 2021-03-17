module.exports = {
    env: {
      node: true,
      es6: true,
      'jest/globals': true,
      commonjs: true
    },
    parserOptions: {
        "ecmaVersion": 2020,
        sourceType: 'module',
    },
    plugins: ["jest"],
    extends: ["eslint:recommended"]
  }
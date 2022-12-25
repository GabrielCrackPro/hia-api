module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "semi": [
      "error",
      "always"
    ],
    "arrow-parens": [
      "error"
    ],
    "arrow-spacing": [
      "error"
    ],
    "camelcase": [
      "error"
    ],
    "default-case": [
      "error"
    ],
    "no-empty": [
      "error"
    ],
    "no-redeclare": [
      "error"
    ],
    "no-unused-vars": [
      "error"
    ],
    "no-var": [
      "error"
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "prefer-destructuring": [
      "error"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "space-before-function-paren": [
      "error"
    ],
    "space-in-parens": [
      "error"
    ],
    "spaced-comment": [
      "error"
    ],
    "line-comment-position": [
      "error"
    ]
  },
};

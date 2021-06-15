module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-scss',
  ],
  rules: {
    'at-rule-no-unknown': null, //
    'scss/at-rule-no-unknown': true,
    'no-descending-specificity': null,
    'function-calc-no-invalid': null,
    'function-url-quotes': 'always',
    // iconfont
    'font-family-no-missing-generic-family-keyword': null,
    'plugin/declaration-block-no-ignored-properties': true,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}

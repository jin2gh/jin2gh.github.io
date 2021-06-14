module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'at-rule-no-unknown': null,
    'function-calc-no-invalid': null,
    'no-invalid-position-at-import-rule': null,
    'function-url-quotes': 'always',
    // iconfont
    'font-family-no-missing-generic-family-keyword': null,
    'plugin/declaration-block-no-ignored-properties': true,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}

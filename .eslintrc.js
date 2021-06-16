module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'airbnb/hooks'],
  plugins: [],
  rules: {
    semi: [2, 'never'], // 分号
    'arrow-parens': [2, 'as-needed'], // 参数括号
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-param-reassign': 0,
  },
}

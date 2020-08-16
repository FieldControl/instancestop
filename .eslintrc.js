module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true
  },
  plugins: ['sonarjs'],
  extends: [
    'standard',
    'plugin:sonarjs/recommended'
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
  }
}

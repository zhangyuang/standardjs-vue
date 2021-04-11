
module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
    'standard-with-typescript'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    createDefaultProgram: true
  },
  rules: {
    'vue/max-attributes-per-line': ['error',
      {
        singleline: 8,
        multiline: {
          max: 8,
          allowFirstLine: true
        }
      }
    ],
    'vue/attribute-hyphenation': 'off',
    'vue/no-deprecated-v-bind-sync': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off'
  }
}

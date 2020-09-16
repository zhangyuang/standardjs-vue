module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
    'standard-with-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    // 属性换行配置
    'vue/max-attributes-per-line': ['error', {
      singleline: 8,
      multiline: {
        max: 8,
        allowFirstLine: true
      }
    }]
  }
}

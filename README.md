# standardjs spec with vue|js|ts

由于 [standardjs](https://standardjs.com/) 官方对 Vue 的支持不足，导致无法直接在 cli 使用 `standard --plugin vue **/*.vue` 命令可以直接校验/修复 .vue 文件的语法错误。必须需要显示创建 .eslintrc.js 文件。这里综合了网上所有的 issue 讨论，排错了错误的／过时的做法。以最简单的方式来实现用 standardjs 规范去检测/修复 .vue|js|ts 文件。保证你创建最少的文件，写最少的内容，安装最少的插件

## feature

- 无需安装 tslint (事实上tslint 已经接近废弃，功能已经以插件的形式被 eslint 全部包含) ref: [那些你应该考虑卸载的 VSCode 扩展](https://zhuanlan.zhihu.com/p/125773296)
- 针对所有类型的文件使用同一套规范
- 最简单的 eslint 配置

## how to use

```bash
$ npm run lint # 用 standardjs 规范处理 .vue|ts|js
$ npm run lint:fix # 用 standardjs 规范修复 .vue|ts|js
```

## vscode plugin

安装下载量最高的 eslint plugin，这里注意如果你还在使用 `eslint.formatOnSave` 说明你当前用的是旧的 eslint 插件

![](./images/eslint.jpg)
## vscode setting

必须包含以下配置

```json
{
  "editor.codeActionsOnSave": {
    // 保存自动格式化
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "files.associations": {
    "*.vue": "vue"
  }
}
```
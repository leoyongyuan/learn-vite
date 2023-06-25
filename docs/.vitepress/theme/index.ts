import SmartyUI from '../../../src/entry'
import Theme from 'vitepress/theme'
// 插件的组件，主要是demo组件

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(SmartyUI)
  },
}
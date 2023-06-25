<script setup>
import basic from './basic.vue'
</script>


# Button 按钮

常用的操作按钮。

## 基础用法

按钮可以根据 `type` 来设置不同的颜色, `primary` `success` `info` `danger` `warning` `text`

设置 `plain` 属性可以设置镂空按钮,设置 `round` 属性可以设置圆角按钮

::: code button/basic
<basic></basic>
:::

## API

### 属性

| 参数     | 说明         | 类型      | 可选值                                             | 默认  |
| -------- | ------------ | --------- | -------------------------------------------------- | ----- |
| size     | 尺寸         | `string`  | medium / small / mini                              | —     |
| type     | 类型         | `string`  | primary / success / warning / danger / info / text | —     |
| plain    | 是否朴素按钮 | `boolean` | —                                                  | false |
| round    | 是否圆角按钮 | `boolean` | —                                                  | false |
| disabled | 是否禁用     | `boolean` | —                                                  | false |
| icon     | 图标类型     | `string`  | —                                                  | —     |

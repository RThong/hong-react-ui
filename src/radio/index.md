---
title: Radio 单选框
group:
  title: 数据录入
  path: /data
---

# Radio 单选框

单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 代码示例

### 基本用法

<code src="./demo/base"></code>

### 不可用

<code src="./demo/disabled"></code>

### 单选组合

<code src="./demo/group"></code>

### 按钮样式

<code src="./demo/style"></code>

### 填底的按钮样式

<code src="./demo/solid"></code>

## API

### Radio

| 属性名         | 描述                              | 类型                            | 默认值  |
| -------------- | --------------------------------- | ------------------------------- | ------- |
| autoFocus      | 自动获取焦点                      | `boolean`                       | `false` |
| checked        | 指定当前是否选中                  | `boolean`                       | `false` |
| defaultChecked | 初始是否选中                      | `boolean`                       | `false` |
| disabled       | 失效状态                          | `boolean`                       | `false` |
| onChange       | 变化时回调函数                    | `(e: RadioChangeEvent) => void` | `--`    |
| value          | 根据 value 进行比较，判断是否选中 | `any`                           | `--`    |

### Radio.Group

| 属性名       | 描述                                             | 类型                                                                    | 默认值    |
| ------------ | ------------------------------------------------ | ----------------------------------------------------------------------- | --------- |
| buttonStyle  | RadioButton 的风格样式，目前有描边和填色两种风格 | `outline \| solid `                                                     | `outline` |
| defaultValue | 默认选中的值                                     | `any`                                                                   | `--`      |
| disabled     | 禁选所有子单选器                                 | `boolean`                                                               | `false`   |
| options      | 子元素配置                                       | `string[] \| Array<{ label: string value: string disabled?: boolean }>` | `--`      |
| optionType   | 用于设置 Radio `options` 类型                    | `default \| button`                                                     | `default` |
| value        | 用于设置当前选中的值                             | `any`                                                                   | `--`      |
| onChange     | 选项变化时的回调函数                             | `(e: RadioChangeEvent) => void`                                         | `--`      |

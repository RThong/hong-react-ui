---
title: Input 输入框
group:
  title: 数据录入
  path: /data
---

# Input

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 代码示例

### 基本使用

<code src="./demo/base"></code>

### 前置 / 后置标签

<code src="./demo/addon"></code>

### 前缀和后缀

<code src="./demo/affix"></code>

### 搜索框

<code src="./demo/search"></code>

<!-- <API src="./Input.tsx" list='["onChange", "addonBefore", "addonAfter", "prefix", "suffix", "disabled", "value", "defaultValue"]'></API> -->

## API

### Input

| 属性名       | 描述                         | 类型                                                 | 默认值  |
| ------------ | ---------------------------- | ---------------------------------------------------- | ------- |
| value        | 输入框内容                   | `string`                                             | `--`    |
| defaultValue | 输入框默认内容               | `string`                                             | `--`    |
| onChange     | 值改变时的回调               | `(e: React.ChangeEvent<HTMLInputElement>) => void`   | `--`    |
| addonBefore  | 带标签的 input，设置前置标签 | `ReactNode`                                          | `--`    |
| addonAfter   | 带标签的 input，设置后置标签 | `ReactNode`                                          | `--`    |
| prefix       | 带有前缀图标的 input         | `ReactNode`                                          | `--`    |
| suffix       | 带有后缀图标的 input         | `ReactNode`                                          | `--`    |
| disabled     | 禁用状态                     | `boolean`                                            | `false` |
| onPressEnter | 按下回车的回调               | `(e: React.KeyboardEvent<HTMLInputElement>) => void` | `false` |

### Input.Search

<!-- <API className="test" src="./Search.tsx" list='["onSearch"]'></API> -->

| 属性名      | 描述                                                       | 类型                       | 默认值  |
| ----------- | ---------------------------------------------------------- | -------------------------- | ------- |
| onSearch    | 点击搜索按钮 / 按下回车键时的回调                          | `(value: string) => void`  | `--`    |
| enterButton | 是否有确认按钮，可设为按钮文字。该属性会与 addonAfter 冲突 | `"boolean" \| "ReactNode"` | `false` |

### Method

| 名称  | 说明     | 参数 |
| ----- | -------- | ---- |
| blur  | 取消焦点 | `--` |
| focus | 获取焦点 | `--` |

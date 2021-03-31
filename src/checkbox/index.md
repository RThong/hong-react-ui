---
title: Checkbox 选择框
group:
  title: 数据录入
  path: /data
  order: 13
---

# Checkbox 多选框

多选框。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码示例

### 基本用法

<code src="./demo/base"></code>

### 不可用

<code src="./demo/disabled"></code>

### 受控的 Checkbox

<code src="./demo/controlled"></code>

### Checkbox 组

<code src="./demo/group"></code>

## API

### Checkbox

| 属性名         | 描述             | 类型                                               | 默认值  |
| -------------- | ---------------- | -------------------------------------------------- | ------- |
| autoFocus      | 自动获取焦点     | `boolean`                                          | `false` |
| checked        | 指定当前是否选中 | `boolean`                                          | `false` |
| defaultChecked | 初始是否选中     | `boolean`                                          | `false` |
| disabled       | 失效状态         | `boolean`                                          | `false` |
| onChange       | 变化时回调函数   | `(e: React.ChangeEvent<HTMLInputElement>) => void` | `--`    |

### Checkbox.Group

| 属性名       | 描述           | 类型                                | 默认值  |
| ------------ | -------------- | ----------------------------------- | ------- |
| defaultValue | 默认选中的选项 | `string[]`                          | `[]`    |
| disabled     | 整组失效       | `boolean`                           | `false` |
| options      | 指定可选项     | `string[] \| Option[]`              | `[]`    |
| value        | 指定选中的选项 | `string[]`                          | `[]`    |
| onChange     | 变化时回调函数 | `(checkedValue: string[]) => void;` | `--`    |

#### Option

```jsx | pure
interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
```

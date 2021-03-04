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

## API

### Radio

| 属性名         | 描述             | 类型                                               | 默认值  |
| -------------- | ---------------- | -------------------------------------------------- | ------- |
| autoFocus      | 自动获取焦点     | `boolean`                                          | `false` |
| checked        | 指定当前是否选中 | `boolean`                                          | `false` |
| defaultChecked | 初始是否选中     | `boolean`                                          | `false` |
| disabled       | 失效状态         | `boolean`                                          | `false` |
| onChange       | 变化时回调函数   | `(e: React.ChangeEvent<HTMLInputElement>) => void` | `--`    |

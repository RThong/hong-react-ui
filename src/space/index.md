---
title: Space 间距
group:
  title: 布局
  path: /layout
---

# Space 间距

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

## 代码示例

### 基本使用

<code src="./demo/base"></code>

### 垂直间距

<code src="./demo/vertical"></code>

### 间距大小

<code src="./demo/size"></code>

### 对齐

<code src="./demo/align"></code>

### 自定义尺寸

<code src="./demo/customSize"></code>

### 分隔符

<code src="./demo/split"></code>

## API

| 属性名    | 描述     | 类型                                       | 默认值       |
| --------- | -------- | ------------------------------------------ | ------------ |
| align     | 对齐方式 | `start` \| `end` \| `center` \| `baseline` | `--`         |
| direction | 间距方向 | `vertical` \| `horizontal`                 | `horizontal` |
| size      | 间距大小 | `small` \| `middle`\| `large`              | `small`      |
| split     | 设置拆分 | `React.ReactNode`                          | `--`         |

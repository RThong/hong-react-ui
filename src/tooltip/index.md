---
title: Tooltip 文字提示
group:
  title: 数据展示
  path: /data
---

# Tooltip 文字提示

简单的文字提示气泡框。

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个 `按钮/文字/操作` 的文案解释。

## 代码示例

### 基本使用

<code src="./demo/base"></code>

### 位置

<code src="./demo/placement"></code>

### 触发方式

<code src="./demo/trigger"></code>

## API

| 属性名           | 描述                                           | 类型                | 默认值  |
| ---------------- | ---------------------------------------------- | ------------------- | ------- |
| title            | 提示文字                                       | `ReactNode`         | `-`     |
| defaultVisible   | 默认是否显隐                                   | `boolean`           | `false` |
| placement        | 气泡框位置，可选 `top` `left` `right` `bottom` | `string`            | `top`   |
| trigger          | 触发行为，可选 `hover` \| `focus` \| `click`   | `string`            | `hover` |
| visible          | 用于手动控制浮层显隐                           | `boolean`           | `false` |
| onVisibleChange  | 显示隐藏的回调                                 | `(visible) => void` | `-`     |
| overlayClassName | 卡片类名                                       | `string`            | `-`     |
| overlayStyle     | 卡片样式                                       | `(visible) => void` | `-`     |

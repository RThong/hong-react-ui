---
title: Spin 加载中
group:
  title: 信息反馈
  path: /feedback
---

# Spin 加载中

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 代码示例

### 基本使用

<code src="./demo/base"></code>

### 各种大小

<code src="./demo/size"></code>

### 容器

<code src="./demo/container"></code>

### 卡片加载中

<code src="./demo/spinning"></code>

### 自定义描述文案

<code src="./demo/tip"></code>

| 参数             | 说明                                         | 类型      | 默认值    |
| ---------------- | -------------------------------------------- | --------- | --------- |
| size             | 组件大小，可选值为 `small` `default` `large` | `string`  | `default` |
| spinning         | 是否为加载中状态                             | `boolean` | `true`    |
| tip              | 当作为包裹元素时，可以自定义描述文案         | `string`  | `--`      |
| wrapperClassName | 包装器的类属性                               | `string`  | `--`      |

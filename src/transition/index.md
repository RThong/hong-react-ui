---
title: Transition 过渡
group:
  title: 其他
  path: /other
  order: 16
---

# Transition 过渡

提供入场/离场动画的功能组件。

## 何时使用

适当的动画效果提升用户体验。

## 代码示例

### 基本使用

<code src="./demo/base"></code>

### 动画完成回调

<code src="./demo/afterClose"></code>

### 退场动画后选择去除元素

<code src="./demo/removeOnLeave"></code>

## API

| 属性名           | 描述                       | 类型                  | 默认值                                                        |
| ---------------- | -------------------------- | --------------------- | ------------------------------------------------------------- |
| visible          | 可见状态                   | `boolean`             | `--`                                                          |
| beforeEnter      | 入场动画开始前的样式       | `React.CSSProperties` | `--`                                                          |
| afterEnter       | 入场动画结束时的样式       | `React.CSSProperties` | `--`                                                          |
| beforeLeave      | 离场动画开始前的样式       | `React.CSSProperties` | `--`                                                          |
| afterLeave       | 离场动画结束时的样式       | `React.CSSProperties` | `--`                                                          |
| afterClose       | 离场动画结束后的回调       | `() => void`          | `--`                                                          |
| removeOnLeave    | 离场动画结束后清除动画元素 | `boolean`             | `true`                                                        |
| transitionActive | 入场/离场动画时的过渡属性  | `React.CSSProperties` | `{ transition: '.3s all cubic-bezier(.645, .045, .355, 1)' }` |

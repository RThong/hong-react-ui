---
title: Modal 对话框
group:
  title: 信息反馈
  path: /feedback
  order: 15
---

# Modal 对话框

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

## 代码示例

### 基础使用

<code src="./demo/base"></code>

### 异步关闭

<code src="./demo/asyncClose"></code>

### 自定义页脚

<code src="./demo/customFooter"></code>

### 确认对话框

<code src="./demo/open"></code>

## API

| 参数           | 说明                                                       | 类型                                             | 默认值  |
| -------------- | ---------------------------------------------------------- | ------------------------------------------------ | ------- |
| visible        | 对话框是否可见                                             | `boolean`                                        | `--`    |
| title          | 标题                                                       | `React.ReactNode`                                | `--`    |
| footer         | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | `React.ReactNode`                                | `--`    |
| onOk           | 点击确定回调                                               | `(e: React.MouseEvent<HTMLElement>) => void`     | `--`    |
| onCancel       | 点击遮罩层或右上角叉或取消按钮的回调                       | `(e: React.SyntheticEvent<HTMLElement>) => void` | `--`    |
| afterClose     | Modal 完全关闭后的回调                                     | `() => void`                                     | `--`    |
| confirmLoading | 确定按钮 loading                                           | `boolean`                                        | `false` |
| closable       | 是否显示右上角的关闭按钮                                   | `boolean`                                        | `true`  |
| centered       | 垂直居中展示 Modal                                         | `boolean`                                        | `false` |
| width          | 宽度                                                       | `string \| number`                               | `520`   |
| maskClosable   | 点击蒙层是否允许关闭                                       | `boolean`                                        | `true`  |
| destroyOnClose | 关闭时销毁 Modal 里的子元素                                | `boolean`                                        | `false` |
| wrapClassName  | 对话框外层容器的类名                                       | `string`                                         | `--`    |
| mask           | 是否展示遮罩                                               | `boolean`                                        | `true`  |
| keyboard       | 是否支持键盘 esc 关闭                                      | `boolean`                                        | `false` |
| style          | 可用于设置浮层的样式，调整浮层位置等                       | `React.CSSProperties`                            | `--`    |

### Modal.open(options)

options 参数具体如下：

| 参数         | 说明                                                             | 类型                  | 默认值  |
| ------------ | ---------------------------------------------------------------- | --------------------- | ------- |
| content      | 内容                                                             | `React.ReactNode`     | `--`    |
| title        | 标题                                                             | `React.ReactNode`     | `--`    |
| onOk         | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | `(close) => void`     | `--`    |
| onCancel     | 点击遮罩层或右上角叉或取消按钮的回调                             | `() => void`          | `--`    |
| afterClose   | Modal 完全关闭后的回调                                           | `() => void`          | `--`    |
| closable     | 是否显示右上角的关闭按钮                                         | `boolean`             | `true`  |
| centered     | 垂直居中展示 Modal                                               | `boolean`             | `false` |
| width        | 宽度                                                             | `string \| number`    | `520`   |
| maskClosable | 点击蒙层是否允许关闭                                             | `boolean`             | `true`  |
| mask         | 是否展示遮罩                                                     | `boolean`             | `true`  |
| keyboard     | 是否支持键盘 esc 关闭                                            | `boolean`             | `false` |
| style        | 可用于设置浮层的样式，调整浮层位置等                             | `React.CSSProperties` | `--`    |

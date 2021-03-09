---
title: Message 全局提示
group:
  title: 信息反馈
  path: /feedback
---

# Message 全局提示

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。

- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码示例

### 普通提示

<code src="./demo/normal"></code>

### 其他提示类型

<code src="./demo/type"></code>

### 加载中

<code src="./demo/loading"></code>

### 修改延时

<code src="./demo/duration"></code>

### Promise 接口

<code src="./demo/promise"></code>

### 自定义样式

<code src="./demo/style"></code>

## API

使用方式和参数如下：

- message.success(config)

- message.error(config)

- message.info(config)

- message.warning(config)

- message.warn(config)

- message.loading(config)

`config` 对象属性参数如下：

| 参数      | 说明                                        | 类型                  | 默认值 |
| --------- | ------------------------------------------- | --------------------- | ------ |
| className | 自定义 CSS class                            | `string`              | `--`   |
| content   | 提示内容                                    | `ReactNode`           | `--`   |
| duration  | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | `number`              | `3`    |
| style     | 自定义内联样式                              | `React.CSSProperties` | `--`   |

组件同时提供 promise 接口。

- message[level](config).then(afterClose)

#### 全局方法

全局销毁方法

- message.destroy()
  > 可以通过 `message.destroy()` 来消除所有 message

import React, { CSSProperties } from 'react';
import classnames from 'classnames';
import './index.less';
import { createScopedClasses } from '@/utils';
import { LoadingOutlined } from '@ant-design/icons';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  // icon:
  // position:
  /**
   * @description       设置按钮类型
   * @default           default
   */
  type?: 'default' | 'primary' | 'dashed' | 'text' | 'link';

  /**
   * @description       设置按钮大小
   * @default           middle
   */
  size?: 'large' | 'middle' | 'small';
  // loading:
  /**
   * @description       按钮失效状态
   * @default           false
   */
  disabled?: boolean;
  /**
   * @description       幽灵按钮
   * @default           false
   */
  ghost?: boolean;
  /**
   * @description       设置按钮载入状态
   * @default           false
   */
  loading?: boolean;
  /**
   * @description       设置 button 原生的 type 值
   * @default           button
   */
  htmlType?: 'submit' | 'reset' | 'button';
  /**
   * @description       点击按钮时的回调
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * @description       自定义 Button 类名
   */
  className?: string;
  /**
   * @description       自定义 Button 样式
   */
  style?: CSSProperties;
}

const sc = createScopedClasses('btn');

const Button = React.forwardRef<any, ButtonProps>((props, ref) => {
  const {
    htmlType = 'button',
    loading,
    ghost,
    type,
    size,
    className,
    style,
    children,
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      type={htmlType}
      className={classnames(
        sc(),
        {
          [sc(type)]: !!type,
          [sc(size)]: size && size !== 'middle',
          [sc('ghost')]: type !== 'text' && type !== 'link' && ghost,
          [sc('loading')]: loading,
        },
        className,
      )}
      style={style}
      {...rest}
    >
      <span
        className={sc('loading-icon')}
        style={{
          width: loading ? '' : '0',
          transform: loading ? 'scale(1)' : 'scale(0)',
          opacity: loading ? 1 : 0,
        }}
      >
        <span>
          <LoadingOutlined
            style={{
              transition: 'margin-left .3s cubic-bezier(.645,.045,.355,1)',
            }}
          />
        </span>
      </span>
      {children}
    </button>
  );
});

export default Button;

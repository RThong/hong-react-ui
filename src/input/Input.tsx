import { createScopedClasses } from '@/utils';
import classnames from 'classnames';
import React, { ReactNode, useImperativeHandle, useRef, useState } from 'react';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  /**
   * @description       输入框内容
   */
  value?: string;
  /**
   * @description       输入框默认内容
   */
  defaultValue?: string;
  /**
   * @description       值改变时的回调
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * @description       带标签的 input，设置前置标签
   */
  addonBefore?: ReactNode;
  /**
   * @description       	带标签的 input，设置后置标签
   */
  addonAfter?: ReactNode;
  /**
   * @description       带有前缀图标的 input
   */
  prefix?: ReactNode;
  /**
   * @description       	带有后缀图标的 input
   */
  suffix?: ReactNode;
  /**
   * @description       	禁用状态
   * @default           false
   */
  disabled?: boolean;
  /**
   * @description       	按下回车的回调
   */
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const sc = createScopedClasses('input');

interface InputRef {
  focus: () => void;
  blur: () => void;
  input: HTMLInputElement;
}

const Input = React.forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    style,
    className,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    disabled,
    onPressEnter,
    onKeyDown,
    ...rest
  } = props;

  const [isFocus, setIsFocus] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * useImperativeHandle 配合  forwardRef将input实例方法暴露给外部调用
   */
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    blur: () => {
      inputRef.current?.blur();
    },
    input: inputRef.current as HTMLInputElement,
  }));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onPressEnter && e.key === 'Enter') {
      onPressEnter(e);
    }
    onKeyDown?.(e);
  };

  const renderInput = () => {
    const getClass = () => {
      return {
        [className!]: className && !addonBefore && !addonAfter,
      };
    };

    if (!!prefix || !!suffix) {
      return (
        <span
          onClick={() => inputRef.current?.focus()}
          style={style && !addonBefore && !addonAfter ? style : undefined}
          className={classnames(
            sc('affix-wrapper'),
            {
              [sc('affix-wrapper-disabled')]: disabled,
              [sc('affix-wrapper-focused')]: isFocus,
            },
            getClass(),
          )}
        >
          {prefix && <span className={classnames(sc('prefix'))}>{prefix}</span>}
          <input
            ref={inputRef}
            className={classnames(sc())}
            disabled={disabled}
            onFocus={(e) => {
              props.onFocus?.(e);
              setIsFocus(true);
            }}
            onBlur={(e) => {
              props.onBlur?.(e);
              setIsFocus(false);
            }}
            onKeyDown={handleKeyDown}
            {...rest}
          />
          {suffix && <span className={classnames(sc('suffix'))}>{suffix}</span>}
        </span>
      );
    }

    return (
      <input
        ref={inputRef}
        disabled={disabled}
        style={style && !addonBefore && !addonAfter ? style : undefined}
        className={classnames(sc(), getClass())}
        onKeyDown={handleKeyDown}
        {...rest}
      />
    );
  };

  if (!!addonBefore || !!addonAfter) {
    return (
      <span className={classnames(sc('group'), className)} style={style}>
        {!!addonBefore && (
          <span
            className={classnames(sc('group-addon'), sc('group-addon-before'))}
          >
            {addonBefore}
          </span>
        )}
        {renderInput()}
        {!!addonAfter && (
          <span
            className={classnames(sc('group-addon'), sc('group-addon-after'))}
          >
            {addonAfter}
          </span>
        )}
      </span>
    );
  }

  return renderInput();
});

export default Input;

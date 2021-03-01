import { createScopedClasses } from '@/utils';
import classnames from 'classnames';
import React, { ReactNode } from 'react';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
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
}

const sc = createScopedClasses('input');

const Input: React.FC<InputProps> = (props) => {
  const {
    style,
    className,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    ...rest
  } = props;

  const renderInput = () => {
    const getClass = () => {
      return {
        [className]: className && !addonBefore && !addonAfter,
      };
    };

    if (!!prefix || !!suffix) {
      return (
        <span
          style={style && !addonBefore && !addonAfter ? style : undefined}
          className={classnames(sc('affix-wrapper'), getClass())}
        >
          {prefix && <span className={classnames(sc('prefix'))}>{prefix}</span>}
          <input className={classnames(sc())} {...rest} />
          {suffix && <span className={classnames(sc('suffix'))}>{suffix}</span>}
        </span>
      );
    }

    return (
      <input
        style={style && !addonBefore && !addonAfter ? style : undefined}
        className={classnames(sc(), getClass())}
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
};

export default Input;

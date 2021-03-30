import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';

import { RadioProps } from './interface';

import './index.less';

const sc = createScopedClasses('radio');

const InternalRadio: React.ForwardRefRenderFunction<any, RadioProps> = (
  props,
  ref,
) => {
  const {
    value,
    checked: checkedProps,
    defaultChecked = false,
    disabled = false,
    autoFocus = false,
    onChange,
    prefixCls = sc(),
    children,
    style,
    className,
    ...restProps
  } = props;

  const [checked, setChecked] = useState(
    'checked' in props ? checkedProps : defaultChecked,
  );

  useEffect(() => {
    if (!autoFocus) {
      return;
    }

    ref?.current?.focus();
  }, [autoFocus, ref]);

  useEffect(() => {
    if (checkedProps !== undefined) {
      setChecked(checkedProps);
    }
  }, [checkedProps]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    onChange?.({
      target: {
        ...props,
        checked: e.target.checked,
      },
      nativeEvent: e.nativeEvent,
    });

    if (!('checked' in props)) {
      setChecked(e.target.checked);
    }
  };

  return (
    <label
      ref={ref}
      style={style}
      className={classnames(
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-wrapper-disabled`]: disabled,
          [`${prefixCls}-wrapper-checked`]: checked,
        },
        className,
      )}
      {...restProps}
    >
      <span
        className={classnames(`${prefixCls}`, {
          [`${prefixCls}-checked`]: checked,
          [`${prefixCls}-disabled`]: disabled,
        })}
      >
        <input
          type="radio"
          className={classnames(`${prefixCls}-input`)}
          value={value}
          checked={checked}
          onChange={handleChange}
        />
        <span className={classnames(`${prefixCls}-inner`)} />
      </span>
      <span>{children}</span>
    </label>
  );
};

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(InternalRadio);

export default Radio;

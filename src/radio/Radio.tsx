import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';

import { RadioProps } from './interface';

import './index.less';

const sc = createScopedClasses('radio');

const InternalRadio: React.ForwardRefRenderFunction<
  HTMLInputElement,
  RadioProps
> = (props, ref) => {
  const {
    value,
    checked: checkedProps,
    defaultChecked = false,
    disabled = false,
    autoFocus = false,
    onChange,
    children,
  } = props;

  const [checked, setChecked] = useState(
    'checked' in props ? checkedProps : defaultChecked,
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  useEffect(() => {
    if (!autoFocus) {
      return;
    }

    inputRef.current?.focus();
  }, [autoFocus]);

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
      className={classnames(sc('wrapper'), {
        [sc('wrapper-disabled')]: disabled,
      })}
    >
      <span
        className={classnames(sc(), {
          [sc('checked')]: checked,
          [sc('disabled')]: disabled,
        })}
      >
        <input
          ref={inputRef}
          type="radio"
          className={classnames(sc('input'))}
          value={value}
          checked={checked}
          onChange={handleChange}
        />
        <span className={classnames(sc('inner'))} />
      </span>
      <span>{children}</span>
    </label>
  );
};

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(InternalRadio);

export default Radio;

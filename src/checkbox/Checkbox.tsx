import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export interface CheckboxRef {
  blur: () => void;
  focus: () => void;
  checkbox: HTMLInputElement;
}

const sc = createScopedClasses('checkbox');

const Checkbox = React.forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const {
    checked: checkedProps,
    disabled = false,
    autoFocus = false,
    onChange,
    defaultChecked = false,
    children,
    className,
    style,
    ...rest
  } = props;

  const [checked, setChecked] = useState(
    'checked' in props ? checkedProps : defaultChecked,
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    blur: () => {
      inputRef.current?.blur();
    },
    checkbox: inputRef.current as HTMLInputElement,
  }));

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

    onChange?.(e);

    if (checkedProps === undefined) {
      setChecked(e.target.checked);
    }
  };

  return (
    <label
      className={classnames(
        sc('wrapper'),
        {
          [sc('wrapper-disabled')]: disabled,
        },
        className,
      )}
      style={style}
    >
      <span
        className={classnames(sc(), {
          [sc('checked')]: checked,
          [sc('disabled')]: disabled,
        })}
      >
        <input
          ref={inputRef}
          type="checkbox"
          className={classnames(sc('input'))}
          onChange={handleChange}
          checked={checked}
        />
        <span className={classnames(sc('inner'))} />
      </span>
      {children && <span>{children}</span>}
    </label>
  );
});

export default Checkbox;

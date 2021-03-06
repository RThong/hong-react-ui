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
  children?: React.ReactNode;
  value?: string;
}

const sc = createScopedClasses('checkbox');

const InternalCheckbox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = (props, ref) => {
  const {
    value,
    checked: checkedProps,
    disabled = false,
    autoFocus = false,
    onChange,
    defaultChecked = false,
    children,
    className,
    style,
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
          value={value}
        />
        <span className={classnames(sc('inner'))} />
      </span>
      {children && <span>{children}</span>}
    </label>
  );
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  InternalCheckbox,
);

export default Checkbox;

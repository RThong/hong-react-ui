import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';

export interface CheckboxProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  value?: string;
}

const sc = createScopedClasses('checkbox');

const InternalCheckbox: React.ForwardRefRenderFunction<any, CheckboxProps> = (
  props,
  ref,
) => {
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

    onChange?.(e);

    if (checkedProps === undefined) {
      setChecked(e.target.checked);
    }
  };

  return (
    <label
      ref={ref}
      className={classnames(
        sc('wrapper'),
        {
          [sc('wrapper-disabled')]: disabled,
        },
        className,
      )}
      style={style}
      {...restProps}
    >
      <span
        className={classnames(sc(), {
          [sc('checked')]: checked,
          [sc('disabled')]: disabled,
        })}
      >
        <input
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

const Checkbox = React.forwardRef<any, CheckboxProps>(InternalCheckbox);

export default Checkbox;

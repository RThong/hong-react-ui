import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';
import { useGetRef } from '@/hooks';

export interface CheckboxProps
  extends Omit<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    'onChange' | 'onClick'
  > {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
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
    onClick,
    ...restProps
  } = props;

  const [checked, setChecked] = useState(
    'checked' in props ? checkedProps : defaultChecked,
  );

  const labelRef = useRef<HTMLLabelElement | null>(null);

  const getInstance = useGetRef(ref, labelRef);

  useEffect(() => {
    if (!autoFocus) {
      return;
    }

    labelRef.current?.focus();
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
      ref={getInstance}
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
          onClick={onClick}
        />
        <span className={classnames(sc('inner'))} />
      </span>
      {children && <span>{children}</span>}
    </label>
  );
};

const Checkbox = React.forwardRef<any, CheckboxProps>(InternalCheckbox);

export default Checkbox;

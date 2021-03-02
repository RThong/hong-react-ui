import React, { ChangeEvent, useState } from 'react';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
}

export interface CheckboxRef {
  blur: () => void;
  focus: () => void;
}

const sc = createScopedClasses('checkbox');

const Checkbox = React.forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const { checked: checkedProps, defaultChecked, children, ...rest } = props;

  const [checked, setChecked] = useState(defaultChecked || checkedProps);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);

    setChecked(e.target.checked);
  };

  return (
    <label className={classnames(sc('wrapper'))}>
      <span
        className={classnames(sc(), {
          [sc('checked')]: checked,
        })}
      >
        <input
          type="checkbox"
          className={classnames(sc('input'))}
          onChange={handleChange}
        />
        <span className={classnames(sc('inner'))} />
      </span>
      <span>{children}</span>
    </label>
  );
});

export default Checkbox;

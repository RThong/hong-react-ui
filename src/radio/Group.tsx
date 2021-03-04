import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';
import './index.less';
import Radio from './Radio';

interface Option {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options?: Array<string | Option>;
  defaultValue?: any;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
// ant-radio-group ant-radio-group-outline

const sc = createScopedClasses('radio');

const Group: React.FC<RadioGroupProps> = (props) => {
  const { value: valueProps, defaultValue, options = [], onChange } = props;

  const [value, setValue] = useState<any>(
    'value' in props ? valueProps : defaultValue,
  );

  const localOptions = options.map((option) => {
    if (typeof option === 'string') {
      return {
        label: option,
        value: option,
      };
    }
    return option;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // onChange?.(e);

    // if (!('value' in props)) {
    console.log('【------】', typeof e.target.value);
    setValue(e.target.value);
    // }
  };

  return (
    <div className={classnames(sc('group'))}>
      {localOptions.map((option) => (
        <Radio
          key={option.value}
          checked={value === option.value}
          onChange={(e) => handleChange(e)}
          value={option.value}
        >
          {option.label + option.value + '---' + value}
        </Radio>
      ))}
    </div>
  );
};

export default Group;

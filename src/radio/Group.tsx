import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';
import './index.less';
import Radio from './Radio';
import { RadioChangeEvent } from './interface';

interface Option {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options?: Array<string | Option>;
  defaultValue?: any;
  value?: any;
  onChange?: (e: RadioChangeEvent) => void;
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

  useEffect(() => {
    if ('value' in props) {
      setValue(props.value);
    }
  }, [props]);

  const handleChange = (e: RadioChangeEvent) => {
    onChange?.(e);

    if (!('value' in props)) {
      setValue(e.target.value);
    }
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
          {option.label}
        </Radio>
      ))}
    </div>
  );
};

export default Group;

import React, { ChangeEvent, useEffect, useState } from 'react';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';
import Checkbox from './Checkbox';

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface GroupProps {
  options?: Array<string | Option>;
  value?: string[];
  defaultValue?: string[];
  onChange?: (checkedValue: string[]) => void;

  style?: React.CSSProperties;
  className?: string;
}

const sc = createScopedClasses('checkbox');

const Group: React.FC<GroupProps> = (props) => {
  const {
    options = [],
    defaultValue = [],
    value: valueProps = [],
    onChange,
  } = props;

  const [value, setValue] = useState(
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
      setValue(props.value || []);
    }
  }, [props]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, v: string) => {
    /**
     * 将当前改变的option对应名称和checked  与   当前group checked数组转为对象
     * 方便比较哪些被选择
     */
    const obj = value.reduce((prev, cur) => {
      // @ts-ignore
      prev[cur] = true;
      return prev;
    }, {});
    // @ts-ignore
    obj[v] = e.target.checked;

    // 将label  checked状态中值为false的去除  拿到的key数组就是所需的value
    const res = Object.entries(obj)
      .filter(([key, v]) => v)
      .map(([key, v]) => key);

    console.log('res', res);

    onChange?.(res);

    if (!('value' in props)) {
      setValue(res);
    }
  };

  return (
    <div className={classnames(sc('group'))}>
      {localOptions.map((option) => (
        <Checkbox
          key={option.value}
          checked={value.indexOf(option.value) !== -1}
          onChange={(e) => handleChange(e, option.value)}
          className={classnames(sc('group-item'))}
        >
          {option.label}
        </Checkbox>
      ))}
    </div>
  );
};

export default Group;

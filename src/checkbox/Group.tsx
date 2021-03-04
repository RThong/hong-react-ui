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
  disabled?: boolean;
  onChange?: (checkedValue: string[]) => void;

  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const sc = createScopedClasses('checkbox');

const Group: React.FC<GroupProps> = (props) => {
  const {
    options = [],
    defaultValue = [],
    value: valueProps = [],
    onChange,
    style,
    className,
    disabled = false,
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

  /**
   * 完全受控时根据外部的value去改变状态
   */
  useEffect(() => {
    if ('value' in props) {
      setValue(props.value || []);
    }
  }, [props]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    /**
     * 将当前改变的option对应值和checked  与   当前group checked数组转为对象
     * 方便比较哪些被选择
     */
    const obj = value.reduce((prev, cur) => {
      // @ts-ignore
      prev[cur] = true;
      return prev;
    }, {});
    // @ts-ignore
    obj[e.target.value] = e.target.checked;

    // 将obj  checked状态中值为false的去除  拿到的key数组就是所需的value
    const res = Object.entries(obj)
      .filter(([key, v]) => v)
      .map(([key, v]) => key);

    onChange?.(res);

    // 在非完全受控的情况下去改变内部状态
    if (!('value' in props)) {
      setValue(res);
    }
  };

  return (
    <div className={classnames(sc('group'), className)} style={style}>
      {localOptions.map((option) => (
        <Checkbox
          key={option.value}
          checked={value.indexOf(option.value) !== -1}
          onChange={(e) => handleChange(e)}
          className={classnames(sc('group-item'))}
          disabled={disabled || option.disabled || false}
          value={option.value}
        >
          {option.label}
        </Checkbox>
      ))}
    </div>
  );
};

export default Group;

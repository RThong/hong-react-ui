import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';
import './index.less';
import Radio from './Radio';
import { RadioChangeEvent, RadioGroupProps } from './interface';

// ant-radio-group ant-radio-group-outline

const sc = createScopedClasses('radio');

const Group: React.FC<RadioGroupProps> = (props) => {
  const {
    buttonStyle = 'outline',
    optionType = 'default',
    value: valueProps,
    defaultValue,
    options = [],
    onChange,
    disabled = false,
    style,
    className,
  } = props;

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

  const renderOptionsRadio = () => {
    const optionsPrefixCls = optionType === 'button' ? `${sc()}-button` : sc();

    return localOptions.map((option) => (
      <Radio
        prefixCls={optionsPrefixCls}
        key={option.value}
        checked={value === option.value}
        onChange={handleChange}
        value={option.value}
        disabled={disabled || option.disabled || false}
      >
        {option.label}
      </Radio>
    ));
  };

  return (
    <div
      className={classnames(sc('group'), sc(`group-${buttonStyle}`), className)}
      style={style}
    >
      {renderOptionsRadio()}
    </div>
  );
};

export default Group;

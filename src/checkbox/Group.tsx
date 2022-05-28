import React, { ChangeEvent, useEffect, useState } from 'react';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';
import Checkbox from './Checkbox';
import { GroupProps } from '@/checkbox/types';
import useCheckboxGroupState from '@/checkbox/hooks/useCheckboxGroupState';

const sc = createScopedClasses('checkbox');

const Group = React.forwardRef<any, GroupProps>((props, ref) => {
  const { style, className, onChange, ...restProps } = props;
  const {
    isSelected,
    isDisabled,
    toggleValue,
    options,
  } = useCheckboxGroupState(props);

  return (
    <div
      className={classnames(sc('group'), className)}
      style={style}
      ref={ref}
      {...restProps}
    >
      {options.map((option) => (
        <Checkbox
          key={option.value}
          checked={isSelected(option.value)}
          onChange={(e) => toggleValue(e.target.value)}
          className={classnames(sc('group-item'))}
          disabled={isDisabled || option.disabled || false}
          value={option.value}
        >
          {option.label}
        </Checkbox>
      ))}
    </div>
  );
});

export default Group;

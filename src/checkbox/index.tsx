import React from 'react';
import InternalCheckbox, { CheckboxProps } from './Checkbox';
import Group from './Group';

export { CheckboxProps } from './Checkbox';
export { GroupProps } from './types';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    CheckboxProps & React.RefAttributes<HTMLInputElement>
  > {
  Group: typeof Group;
}

const Checkbox = InternalCheckbox as CompoundedComponent;

Checkbox.Group = Group;

export default Checkbox;

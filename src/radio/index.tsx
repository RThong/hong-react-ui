import React from 'react';
import InternalRadio from './Radio';
import Group from './Group';
import { RadioProps } from './interface';

export {
  RadioGroupButtonStyle,
  RadioGroupOptionType,
  RadioGroupProps,
  RadioProps,
  RadioChangeEventTarget,
  RadioChangeEvent,
} from './interface';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    RadioProps & React.RefAttributes<HTMLInputElement>
  > {
  Group: typeof Group;
}

const Radio = InternalRadio as CompoundedComponent;

Radio.Group = Group;

export default Radio;

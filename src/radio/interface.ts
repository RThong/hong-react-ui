import React from 'react';

export interface RadioProps
  extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  checked?: boolean;
  defaultChecked?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;

  children?: React.ReactNode;
  value?: any;
  onChange?: (e: RadioChangeEvent) => void;
}

export interface RadioChangeEventTarget extends RadioProps {
  checked: boolean;
}

export interface RadioChangeEvent {
  target: RadioChangeEventTarget;
  // stopPropagation: () => void;
  // preventDefault: () => void;
  nativeEvent: Event;
}

export type RadioGroupButtonStyle = 'outline' | 'solid';
export type RadioGroupOptionType = 'default' | 'button';

export interface Option {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface RadioGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options?: Array<string | Option>;
  defaultValue?: any;
  value?: any;
  onChange?: (e: RadioChangeEvent) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;

  buttonStyle?: RadioGroupButtonStyle;
  optionType?: RadioGroupOptionType;
}

import React from 'react';

export interface RadioProps {
  checked?: boolean;
  defaultChecked?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;

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

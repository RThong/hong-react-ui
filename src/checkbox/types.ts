import React from 'react';

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface GroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options?: Array<string | Option>;
  value?: string[];
  defaultValue?: string[];
  disabled?: boolean;
  onChange?: (checkedValue: string[]) => void;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

export interface CheckboxGroupState {
  /** Current selected values. */
  readonly value: readonly string[];

  /** Whether the checkbox group is disabled. */
  readonly isDisabled: boolean;

  readonly options: readonly Option[];

  /** Returns whether the given value is selected. */
  isSelected: (value: string) => boolean;

  /** Sets the selected values. */
  setValue: (value: string[]) => void;

  /** Adds a value to the set of selected values. */
  addValue: (value: string) => void;

  /** Removes a value from the set of selected values. */
  removeValue: (value: string) => void;

  /** Toggles a value in the set of selected values. */
  toggleValue: (value: string) => void;
}

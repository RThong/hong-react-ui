import { CheckboxGroupState, GroupProps } from '@/checkbox/types';
import { useControlledState } from '@/utils/useControlledState';

const useCheckboxGroupState = (props: GroupProps): CheckboxGroupState => {
  const [selectedValues, setSelectedValues] = useControlledState(
    props.value!,
    props.defaultValue || [],
    props.onChange!,
  );

  const localOptions = (props.options || []).map((option) => {
    if (typeof option === 'string') {
      return {
        label: option,
        value: option,
      };
    }
    return option;
  });

  return {
    value: selectedValues,
    isDisabled: props.disabled || false,
    options: localOptions,
    addValue(value: string): void {
      if (props.disabled) {
        return;
      }
      if (!selectedValues.includes(value)) {
        setSelectedValues(selectedValues.concat(value));
      }
    },
    isSelected(value: string): boolean {
      return selectedValues.includes(value);
    },
    removeValue(value: string): void {
      if (props.disabled) {
        return;
      }
      if (selectedValues.includes(value)) {
        setSelectedValues(
          selectedValues.filter((existingValue) => existingValue !== value),
        );
      }
    },
    setValue: setSelectedValues,
    toggleValue(value: string): void {
      if (props.disabled) {
        return;
      }
      if (selectedValues.includes(value)) {
        setSelectedValues(
          selectedValues.filter((existingValue) => existingValue !== value),
        );
      } else {
        setSelectedValues(selectedValues.concat(value));
      }
    },
  };
};

export default useCheckboxGroupState;

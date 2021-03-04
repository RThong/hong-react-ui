import React from 'react';
import InternalInput, { InputProps } from './Input';
import Search from './Search';
import TextArea from './TextArea';

export { InputProps } from './Input';
export { SearchProps } from './Search';
export { TextAreaProps } from './TextArea';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement>
  > {
  Search: typeof Search;
  TextArea: typeof TextArea;
}

const Input = InternalInput as CompoundedComponent;

Input.Search = Search;
Input.TextArea = TextArea;

export default Input;

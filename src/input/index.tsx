import Search from './Search';
import TextArea from './TextArea';

export { InputProps, InputRef } from './Input';
export { SearchProps, SearchRef } from './Search';
export { TextAreaProps, TextAreaRef } from './TextArea';

const Input = Object.assign(import('./Input'), { Search, TextArea });

export default Input;

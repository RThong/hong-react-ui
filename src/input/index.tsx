import Input from './Input';
import Search from './Search';
import TextArea from './TextArea';

export { InputProps, InputRef } from './Input';
export { SearchProps, SearchRef } from './Search';
export { TextAreaProps, TextAreaRef } from './TextArea';

export default Object.assign(Input, { Search, TextArea });

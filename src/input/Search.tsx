import React from 'react';
import { InputProps } from './Input';

export interface SearchProps extends InputProps {
  /**
   * @description       点击搜索按钮 / 按下回车键时的回调
   */
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => void;
}

const Search: React.FC<SearchProps> = () => {
  return <div>Search</div>;
};

export default Search;

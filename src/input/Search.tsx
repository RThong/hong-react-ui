import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import Input, { InputProps } from './Input';
import Button from '../button/index';
import { createScopedClasses } from '@/utils';
import classnames from 'classnames';

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

const sc = createScopedClasses('input');

const Search: React.FC<SearchProps> = () => {
  return (
    <Input
      className={classnames(sc('search'))}
      suffix={
        <span className={classnames(sc('search-icon'))}>
          <SearchOutlined />
        </span>
      }
      // addonAfter={
      //   <Button>
      //     <SearchOutlined />
      //   </Button>
      // }
    />
  );
};

export default Search;

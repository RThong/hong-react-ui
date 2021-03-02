import { SearchOutlined } from '@ant-design/icons';
import React, { useImperativeHandle, useRef } from 'react';
import Input, { InputProps } from './Input';
import Button from '../button/index';
import { createScopedClasses } from '@/utils';
import classnames from 'classnames';

export interface SearchProps extends InputProps {
  /**
   * @description       点击搜索按钮 / 按下回车键时的回调
   */
  onSearch?: (value: string) => void;
}

interface InputRef {
  focus: () => void;
  blur: () => void;
  input: HTMLInputElement;
}

const sc = createScopedClasses('input');

const Search: React.FC<SearchProps> = React.forwardRef<InputRef, SearchProps>(
  (props, ref) => {
    const { onSearch, ...rest } = props;

    const inputRef = useRef<InputRef>(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      blur: () => {
        inputRef.current?.blur();
      },
      input: inputRef.current?.input as HTMLInputElement,
    }));

    const handleSearch = () => {
      onSearch?.(inputRef.current?.input.value as string);
    };

    return (
      <Input
        ref={inputRef}
        className={classnames(sc('search'))}
        suffix={
          <span
            className={classnames(sc('search-icon'))}
            onClick={(e) => {
              handleSearch();
              e.stopPropagation();
            }}
          >
            <SearchOutlined />
          </span>
        }
        onPressEnter={handleSearch}
        {...rest}
        // addonAfter={
        //   <Button>
        //     <SearchOutlined />
        //   </Button>
        // }
      />
    );
  },
);

export default Search;

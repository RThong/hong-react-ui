import { SearchOutlined } from '@ant-design/icons';
import React, { ReactNode, useImperativeHandle, useRef } from 'react';
import Input, { InputProps } from './Input';
import Button from '../button/index';
import { createScopedClasses } from '@/utils';
import classnames from 'classnames';

export interface SearchProps extends InputProps {
  /**
   * @description       点击搜索按钮 / 按下回车键时的回调
   */
  onSearch?: (value: string) => void;
  /**
   * @description       是否有确认按钮，可设为按钮文字。该属性会与 addonAfter 冲突。
   * @default           false
   */
  enterButton?: boolean | ReactNode;
}

export interface SearchRef {
  focus: () => void;
  blur: () => void;
  input: HTMLInputElement;
}

const sc = createScopedClasses('input');

const Search: React.FC<SearchProps> = React.forwardRef<SearchRef, SearchProps>(
  (props, ref) => {
    const { addonAfter, onSearch, enterButton = false, ...rest } = props;

    const inputRef = useRef<SearchRef>(null);

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

    const renderAddonAfter = () => {
      if (enterButton) {
        return (
          <span onClick={handleSearch}>
            {enterButton === true ? <SearchOutlined /> : enterButton}
          </span>
        );
      }
      return undefined;
    };

    return (
      <Input
        ref={inputRef}
        className={classnames(sc('search'))}
        suffix={
          !enterButton ? (
            <span
              className={classnames(sc('search-icon'))}
              onClick={(e) => {
                handleSearch();
                e.stopPropagation();
              }}
            >
              <SearchOutlined />
            </span>
          ) : undefined
        }
        onPressEnter={handleSearch}
        {...rest}
        addonAfter={renderAddonAfter()}
      />
    );
  },
);

export default Search;

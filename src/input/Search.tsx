import { SearchOutlined } from '@ant-design/icons';
import React, { ReactNode, useImperativeHandle, useRef } from 'react';
import Input, { InputProps } from './Input';
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

const sc = createScopedClasses('input');

const Search: React.FC<SearchProps> = React.forwardRef<
  HTMLInputElement,
  SearchProps
>((props, ref) => {
  const { addonAfter, onSearch, enterButton = false, ...rest } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  const handleSearch = () => {
    onSearch?.(inputRef.current?.value as string);
  };

  const renderAddonAfter = () => {
    if (enterButton) {
      return (
        <span
          className={classnames(sc('search-btn'))}
          onClick={() => {
            console.log('【e】');

            handleSearch();
          }}
        >
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
});

export default Search;

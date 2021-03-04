import { createScopedClasses } from '@/utils';
import classnames from 'classnames';
import React, { useImperativeHandle, useRef } from 'react';

export interface TextAreaProps
  extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'prefix'> {
  /**
   * @description       输入框默认内容
   */
  defaultValue: string;
  /**
   * @description       输入框内容
   */
  value?: string;
  /**
   * @description       按下回车的回调
   */
  onPressEnter?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const sc = createScopedClasses('input');

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      defaultValue,
      value,
      onPressEnter,
      className,
      style,
      ...rest
    } = props;

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (onPressEnter && e.key === 'Enter') {
        onPressEnter(e);
      }
    };

    return (
      <textarea
        ref={textareaRef}
        value={value || defaultValue}
        className={classnames(sc(), className)}
        onKeyDown={handleKeyDown}
        {...rest}
      />
    );
  },
);

export default TextArea;

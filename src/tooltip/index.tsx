import { createScopedClasses } from '@/utils';
import classnames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Transition, Button } from '..';

import './index.less';

export interface TooltipProps {
  title?: string;
}

const sc = createScopedClasses('tooltip');

const Tooltip: React.FC<TooltipProps> = (props) => {
  const { children } = props;

  const [derivedVisible, setDerivedVisible] = useState(false);

  const [rect, setRect] = useState<{
    x: number;
    y: number;
  }>();

  // 目标元素
  const targetRef = useRef<HTMLElement>(null);

  // tooltip元素
  const tooltipRef = useRef<HTMLElement>(null);

  const getRect = useCallback(() => {
    // const { wrapperRef, triggerNode } = this
    const {
      top: triggerTop,
      left: triggerLeft,
      right: triggerRight,
      bottom: triggerBottom,
    } = targetRef.current?.getBoundingClientRect() as DOMRect;
    const triggerWidth = triggerRight - triggerLeft;
    const triggerHeight = triggerBottom - triggerTop;
    const { scrollX, scrollY } = window;

    return {
      x: triggerLeft + scrollX + triggerWidth / 2,
      y: triggerTop + scrollY,
    };
  }, []);
  // const { position } = this.props
  // switch (position) {
  //   case 'top':
  //     wrapperRef.style.left = triggerLeft + scrollX + triggerWidth / 2 + 'px'
  //     wrapperRef.style.top = triggerTop + scrollY + 'px'
  //     break
  //   case 'bottom':
  //     wrapperRef.style.left = triggerLeft + scrollX + triggerWidth / 2 + 'px'
  //     wrapperRef.style.top = triggerBottom + scrollY + 'px'
  //     break
  //   case 'left':
  //     wrapperRef.style.left = triggerLeft + scrollX + 'px'
  //     wrapperRef.style.top = triggerTop + triggerHeight / 2 + scrollY + 'px'
  //     break
  //   case 'right':
  //     wrapperRef.style.left = triggerRight + scrollX + 'px'
  //     wrapperRef.style.top = triggerTop + triggerHeight / 2 + scrollY + 'px'
  //     break
  //   default:
  //     break
  // }

  useEffect(() => {
    // const temp = targetRef.current?.getBoundingClientRect() as DOMRect;
    // console.log('【temp】', temp);

    setRect(getRect());
  }, [getRect]);

  useEffect(() => {
    const cb = (e: MouseEvent) => {
      if (e.target !== tooltipRef.current) {
        setDerivedVisible(false);
      }
    };
    document.body.addEventListener('click', cb);

    return () => {
      document.body.removeEventListener('click', cb);
    };
  }, []);

  return (
    <>
      {React.cloneElement(children, {
        onClick: () => {
          setDerivedVisible(true);
        },
        // onFocus: () => console.log('【onFocus】'),

        ref: targetRef,
      })}

      <Transition
        visible={derivedVisible}
        beforeEnter={{ opacity: 0 }}
        afterEnter={{ opacity: 1 }}
        afterLeave={{ opacity: 0 }}
      >
        {({ className, style }, ref) => {
          tooltipRef.current = ref.current;
          return ReactDOM.createPortal(
            // <div
            //   ref={ref}
            //   style={{
            //     width: 200,
            //     height: 100,
            //     background: 'green',
            //     position: 'absolute',
            //     left: rect?.x,
            //     top: rect?.y,
            //     ...style,
            //   }}
            // >
            //   tooltip
            // </div>,

            <div
              ref={ref}
              className={classnames(sc(), sc('placement-top'), sc('hidden'))}
              style={{ left: rect?.x, top: rect?.y, ...style }}
              // style="left: -556px; top: -563px; transform-origin: 50% 46px; pointer-events: none;"
            >
              <div className={classnames(sc('content'))}>
                <div className={classnames(sc('arrow'))}>
                  <span className={classnames(sc('arrow-content'))} />
                </div>
                <div className={classnames(sc('inner'))}>prompt text</div>
              </div>
            </div>,
            document.body,
          );
        }}
      </Transition>
    </>
  );
};

export default Tooltip;

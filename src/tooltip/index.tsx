import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { createScopedClasses } from '@/utils';
import classnames from 'classnames';
import Transition from '../transition';
import { useDelayTime } from './hooks';

import './index.less';
import { useGetRef } from '@/hooks';

type Trigger = 'click' | 'hover' | 'focus';

type Placement = 'top' | 'left' | 'right' | 'bottom';

export interface TooltipProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  title?: React.ReactNode;
  trigger?: Trigger;
  visible?: boolean;
  defaultVisible?: boolean;
  placement?: Placement;
  onVisibleChange?: (visible: boolean) => void;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
}

const sc = createScopedClasses('tooltip');

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const {
    children,
    trigger = 'hover',
    visible,
    defaultVisible,
    title,
    placement = 'top',
    onVisibleChange,
    overlayClassName,
    overlayStyle,
  } = props;

  const delaySetPopupVisible = useDelayTime();

  const [derivedVisible, setDerivedVisible] = useState(
    visible ?? defaultVisible ?? false,
  );

  // transition过渡后真正看到的状态
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if (visible === undefined) {
      return;
    }

    setDerivedVisible(visible);
  }, [visible]);

  const [rect, setRect] = useState<{
    x: number;
    y: number;
  }>();

  // 目标元素
  const targetRef = useRef<HTMLElement | null>(null);

  // tooltip元素
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const getInstance = useGetRef(ref, tooltipRef);

  const getRect = useCallback(() => {
    const {
      top: triggerTop,
      left: triggerLeft,
      right: triggerRight,
      bottom: triggerBottom,
    } = targetRef.current?.getBoundingClientRect() as DOMRect;
    const triggerWidth = triggerRight - triggerLeft;
    const triggerHeight = triggerBottom - triggerTop;
    const { scrollX, scrollY } = window;

    switch (placement) {
      case 'top':
        return {
          x: triggerLeft + scrollX + triggerWidth / 2,
          y: triggerTop + scrollY,
        };
      case 'bottom':
        return {
          x: triggerLeft + scrollX + triggerWidth / 2,
          y: triggerBottom + scrollY,
        };
      case 'left':
        return {
          x: triggerLeft + scrollX,
          y: triggerTop + triggerHeight / 2 + scrollY,
        };
      case 'right':
        return {
          x: triggerRight + scrollX,
          y: triggerTop + triggerHeight / 2 + scrollY,
        };
      default:
        break;
    }
  }, [placement]);

  useEffect(() => {
    if (!children) {
      return;
    }
    if (title !== undefined && title !== '') {
      setRect(getRect());
    }
  }, [getRect, title, children]);

  const handleVisibleChange = useCallback(
    (val: boolean) => {
      setDerivedVisible(val);
      derivedVisible !== val && onVisibleChange?.(val);
    },
    [onVisibleChange, derivedVisible],
  );

  useEffect(() => {
    if (visible !== undefined || trigger !== 'click') {
      return;
    }

    const cb = (e: MouseEvent) => {
      if (
        popupVisible &&
        tooltipRef.current &&
        !tooltipRef.current?.contains(e.target as HTMLElement)
      ) {
        handleVisibleChange(false);
      }
    };
    document.addEventListener('click', cb);

    return () => {
      document.removeEventListener('click', cb);
    };
  }, [trigger, visible, derivedVisible, handleVisibleChange, popupVisible]);

  const handleClick = () => {
    if (visible !== undefined || trigger !== 'click') {
      return;
    }
    handleVisibleChange(true);
  };

  const handleMouseEnter = () => {
    if (visible !== undefined || trigger !== 'hover') {
      return;
    }
    delaySetPopupVisible(() => handleVisibleChange(true));
  };

  const handleMouseLeave = () => {
    if (visible !== undefined || trigger !== 'hover') {
      return;
    }
    delaySetPopupVisible(() => handleVisibleChange(false), 0.1);
  };

  const handleFocus = () => {
    if (visible !== undefined || trigger !== 'focus') {
      return;
    }
    handleVisibleChange(true);
  };

  const handleBlur = () => {
    if (visible !== undefined || trigger !== 'focus') {
      return;
    }
    handleVisibleChange(false);
  };

  if (!children) {
    return null;
  }

  return title !== undefined && title !== '' ? (
    <>
      {React.cloneElement(children as React.ReactElement, {
        onClick: handleClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onFocus: handleFocus,
        onBlur: handleBlur,
        ref: targetRef,
      })}

      <Transition
        transitionActive={{
          transition: 'all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
        }}
        visible={derivedVisible}
        beforeEnter={{ opacity: 0 }}
        afterEnter={{ opacity: 1 }}
        afterLeave={{ opacity: 0 }}
        onBeforeEnter={() => setPopupVisible(true)}
        afterClose={() => setPopupVisible(false)}
        removeOnLeave={false}
      >
        {({ style }, popupRef) => {
          return ReactDOM.createPortal(
            <div
              ref={(val) => {
                popupRef.current = val;
                getInstance(val);
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={classnames(
                sc(),
                sc(`placement-${placement}`),
                overlayClassName,
              )}
              style={{
                left: rect?.x,
                top: rect?.y,
                ...style,
                ...overlayStyle,
              }}
            >
              <div className={classnames(sc('content'))}>
                <div className={classnames(sc('arrow'))}>
                  <span className={classnames(sc('arrow-content'))} />
                </div>
                <div className={classnames(sc('inner'))}>{title}</div>
              </div>
            </div>,
            document.body,
          );
        }}
      </Transition>
    </>
  ) : (
    (children as React.ReactElement)
  );
});

export default Tooltip;

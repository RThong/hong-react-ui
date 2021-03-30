import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { createScopedClasses } from '@/utils';
import classnames from 'classnames';
import Transition from '../transition';
import { useDelayTime } from './hooks';

import './index.less';

enum Trigger {
  'click' = 'click',
  'hover' = 'hover',
  'focus' = 'focus',
}

enum Placement {
  'top' = 'top',
  'left' = 'left',
  'right' = 'right',
  'bottom' = 'bottom',
}

export interface TooltipProps {
  title?: React.ReactNode;
  trigger?: Trigger;
  visible?: boolean;
  defaultVisible?: boolean;
  placement?: Placement;
  onVisibleChange?: (visible: boolean) => void;
}

const sc = createScopedClasses('tooltip');

const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    children,
    trigger = Trigger.hover,
    visible,
    defaultVisible,
    title,
    placement = Placement.top,
    onVisibleChange,
  } = props;

  const delaySetPopupVisible = useDelayTime();

  const [derivedVisible, setDerivedVisible] = useState(
    visible ?? defaultVisible ?? false,
  );

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
  const tooltipRef = useRef<HTMLElement | null>(null);

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
    if (visible !== undefined || trigger !== Trigger.click) {
      return;
    }

    const cb = (e: MouseEvent) => {
      if (
        derivedVisible &&
        tooltipRef.current &&
        !tooltipRef.current?.contains(e.target as HTMLElement)
      ) {
        handleVisibleChange(false);
      }
    };
    document.body.addEventListener('click', cb);

    return () => {
      document.body.removeEventListener('click', cb);
    };
  }, [derivedVisible, trigger, visible, handleVisibleChange]);

  const handleClick = () => {
    if (visible !== undefined || trigger !== Trigger.click) {
      return;
    }
    handleVisibleChange(true);
  };

  const handleMouseEnter = () => {
    if (visible !== undefined || trigger !== Trigger.hover) {
      return;
    }
    delaySetPopupVisible(() => handleVisibleChange(true));
  };

  const handleMouseLeave = () => {
    if (visible !== undefined || trigger !== Trigger.hover) {
      return;
    }
    delaySetPopupVisible(() => handleVisibleChange(false), 0.1);
  };

  const handleFocus = () => {
    if (visible !== undefined || trigger !== Trigger.focus) {
      return;
    }
    handleVisibleChange(true);
  };

  const handleBlur = () => {
    if (visible !== undefined || trigger !== Trigger.focus) {
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
      >
        {({ style }, ref) => {
          tooltipRef.current = ref.current;
          return ReactDOM.createPortal(
            <div
              ref={ref}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={classnames(
                sc(),
                sc(`placement-${placement}`),
                sc('hidden'),
              )}
              style={{
                left: rect?.x,
                top: rect?.y,
                ...style,
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
};

export default Tooltip;

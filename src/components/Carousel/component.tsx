import clsx from 'clsx';
import React, {useEffect, useMemo, useState} from 'react';
import CarouselProps, {CarouselItem} from './props';

export const Carousel: React.FC<CarouselProps> = (props) => {
  const {items = [], selectedIndex = 0, showNavigation = false, onItemClicked} = props;
  const [activeIndex, setActiveIndex] = useState(selectedIndex);
  const [swipeEvent, setSwipeEvent] = useState({
    started: false,
    ended: false,
    startingPoint: {
      x: NaN,
      y: NaN,
    },
    endingPoint: {
      x: NaN,
      y: NaN,
    },
  });

  const rootClass = useMemo(() => clsx('w-full', 'overflow-hidden'), []);
  const contClass = useMemo(() => clsx('duration-300 whitespace-nowrap'), []);
  const itemClass = useMemo(() => clsx('inline-flex', 'w-10/12', 'mr-2'), []);
  const imgeClass = useMemo(() => clsx('w-full aspect-video shadow rounded'), []);
  const naviClass = useMemo(() => clsx('text-base rounded-full border h-8 w-8 mr-2'), []);
  const translate = useMemo(() => {
    const firstIndex = activeIndex === 0;
    const lastIndex = activeIndex === items.length - 1;
    const img = `${activeIndex * 83.333}%`;
    const pad = `${activeIndex * 0.5}rem`;
    const leftPeek = firstIndex || lastIndex ? '0%' : '8.333%';
    const lastPeek = !lastIndex ? '0%' : '16.666%';
    return `calc(-1 * ${img} - ${pad} + ${leftPeek} + ${lastPeek})`;
  }, [activeIndex]);

  const handleItemClicked =
    (item: CarouselItem, index: number) =>
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      try {
        if (activeIndex === index) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX > rect.width / 4) return;

          setActiveIndex(Math.max(activeIndex - 1, 0));
          return;
        }

        setActiveIndex(index);
      } finally {
        if (!onItemClicked) return;
        onItemClicked(item, index);
      }
    };

  const handleNaviClicked =
    (index: number) => (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setActiveIndex(index);
    };

  const handleTouchStarted = (e: React.TouchEvent) => {
    const startingPoint = e.touches[0];
    setSwipeEvent({
      started: true,
      ended: false,
      startingPoint: {x: startingPoint.clientX, y: startingPoint.clientY},
      endingPoint: {x: NaN, y: NaN},
    });
  };

  const handleTouchEnded = (e: React.TouchEvent) => {
    const endingPoint = e.changedTouches[0];
    setSwipeEvent((state) => ({
      started: true,
      ended: true,
      startingPoint: state.startingPoint,
      endingPoint: {x: endingPoint.clientX, y: endingPoint.clientY},
    }));
  };

  useEffect(() => {
    if (!swipeEvent.started || !swipeEvent.ended) return;

    try {
      const {startingPoint, endingPoint} = swipeEvent;
      const slope = (endingPoint.y - startingPoint.y) / (endingPoint.x - startingPoint.x);
      if (slope > 0.3 || slope < -0.3) return;

      const direction = endingPoint.x - startingPoint.x < 0 ? 'rtl' : 'ltr';
      if (direction === 'rtl') {
        setActiveIndex(Math.min(activeIndex + 1, items.length - 1));
      } else {
        setActiveIndex(Math.max(activeIndex - 1, 0));
      }
    } finally {
      setSwipeEvent({
        started: false,
        ended: false,
        startingPoint: {
          x: NaN,
          y: NaN,
        },
        endingPoint: {
          x: NaN,
          y: NaN,
        },
      });
    }
  }, [swipeEvent]);

  return (
    <div className={rootClass} onTouchStart={handleTouchStarted} onTouchEnd={handleTouchEnded}>
      <div className={contClass} style={{transform: `translateX(${translate})`}}>
        {items.map((i, idx) => {
          return (
            <div
              key={`item-${idx}-${i.alt}`}
              className={itemClass}
              onClick={handleItemClicked(i, idx)}
            >
              <img src={i.img} className={imgeClass} />
            </div>
          );
        })}
      </div>
      {showNavigation && (
        <div className="flex mt-2">
          {items.map((i, idx) => {
            return (
              <button
                key={`nav-${idx}-${i.alt}`}
                className={clsx(naviClass, activeIndex === idx && 'bg-primary text-white')}
                onClick={handleNaviClicked(idx)}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

Carousel.defaultProps = {
  items: [],
  selectedIndex: 0,
};

export default Carousel;

import React, {createRef, forwardRef, useEffect, useMemo} from 'react';
import clsx from 'clsx';
import DrawerProps from './props';

export const Drawer: React.FC<DrawerProps> = forwardRef<HTMLUListElement, DrawerProps>(
  ({isShowing = false, position = 'right', items = [], onClose}, ref) => {
    ref = ref ?? createRef();
    const rootClass = useMemo(
      () =>
        clsx('absolute', 'w-full', 'top-0', 'bottom-0', 'z-50', 'overflow-hidden', 'duration-500', {
          'left-0': position === 'left',
          'right-0': position === 'right',
          invisible: !isShowing,
        }),
      [isShowing, position],
    );

    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        // @ts-ignore
        if (ref && !ref.current.contains(event.target)) onClose();
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);

    return (
      <div className={rootClass}>
        <ul
          ref={ref}
          className={clsx(
            'flex',
            'flex-col',
            'items-start',
            'bg-white',
            'w-3/5',
            'h-full',
            'shadow',
            'duration-300',
            'text-base',
            position === 'left' && 'mr-auto ml-0',
            position === 'right' && 'ml-auto mr-0',
            {
              '-translate-x-full invisible': position === 'left' && !isShowing,
              'translate-x-full invisible': position === 'right' && !isShowing,
            },
          )}
        >
          {items.map((drawerItem) => {
            const {caption, image, isActive, onClick} = drawerItem;
            return (
              <>
                <li
                  key={`li-${caption}`}
                  className={clsx(
                    'flex p-2 w-full',
                    onClick && !isActive && 'cursor-pointer',
                    isActive && 'bg-primary-400 cursor-default text-white',
                  )}
                  onClick={onClick ? () => onClick(drawerItem) : undefined}
                >
                  {!image ? undefined : typeof image === 'string' ? (
                    <img src={image} className="h-5 w-5 my-auto mr-2"></img>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 my-auto mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {image}
                    </svg>
                  )}
                  {caption}
                </li>
                <hr key={`hr-${caption}`} className="flex w-full" />
              </>
            );
          })}
        </ul>
      </div>
    );
  },
);

Drawer.defaultProps = {
  isShowing: false,
  position: 'right',
  items: [],
};

export default Drawer;

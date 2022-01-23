import React, {useMemo} from 'react';
import clsx from 'clsx';

import BaseProps from '@props/Base';
import PropertyProps from './props';

export const Property: React.FC<PropertyProps & BaseProps> = (props) => {
  const {className, fullWidth = false, image, isActive = false, name, value} = props;
  const rootClass = useMemo(
    () =>
      clsx(
        'text-base cursor-pointer',
        'flex items-center',
        'border rounded shadow hover:border-primary',
        isActive && 'border-primary',
        fullWidth ? 'w-full' : 'w-fit',
        className,
      ),
    [fullWidth, className],
  );

  const leftClass = useMemo(
    () => clsx('flex items-center p-1 border-r bg-slate-100 rounded-l', fullWidth && 'w-1/2'),
    [fullWidth],
  );

  return (
    <div className={rootClass}>
      <span className={leftClass}>
        {image && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20">
            {image}
          </svg>
        )}
        {name && (
          <small className="mx-1 font-bold text-ellipsis overflow-hidden whitespace-nowrap">
            {name}
          </small>
        )}
      </span>
      <small className="mx-2 rounded-r text-ellipsis overflow-hidden whitespace-nowrap">
        {value}
      </small>
    </div>
  );
};

export default Property;

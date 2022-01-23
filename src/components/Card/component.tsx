import BaseProps from '@props/Base';
import clsx from 'clsx';
import React, {useCallback, useMemo} from 'react';

import CardProps from './props';

export const Card: React.FC<CardProps & BaseProps> = (props) => {
  const {children, className, image, alt, title, onClick} = props;

  const rootClass = useMemo(
    () =>
      clsx(
        'max-w-sm rounded-lg overflow-hidden shadow relative',
        onClick && 'cursor-pointer focus:animate-pulse-once',
        className,
      ),
    [],
  );

  const handleClick = useCallback(() => {
    if (!onClick) return;

    onClick(props);
  }, [onClick]);

  return (
    <div tabIndex={0} className={rootClass} onClick={handleClick}>
      <img
        className="w-full min-w-full aspect-video text-primary rounded-t-lg"
        src={image || undefined}
        alt={alt}
      />
      <div className="p-2">
        <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Card;

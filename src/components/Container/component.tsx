import React, {forwardRef} from 'react';
import clsx from 'clsx';

import {px, py} from '@utils/padding';

import ContainerProps from './props';
import styles from './style';

export const Container: React.FC<ContainerProps> = forwardRef<HTMLDivElement, ContainerProps>(
  ({children, className, layoutPadding = {x: 2, y: 2}}, ref) => {
    const {x = 2, y = 2} = layoutPadding;
    const rootClass = clsx(styles.root, px(x), py(y), className);

    return (
      <div ref={ref} className={rootClass}>
        {children}
      </div>
    );
  },
);

Container.defaultProps = {
  layoutPadding: {
    x: 2,
    y: 2,
  },
};

export default Container;

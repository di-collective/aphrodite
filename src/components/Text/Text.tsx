import React, {forwardRef} from 'react';
import clsx from 'clsx';

import {tc} from '@utils/textColor';

import TextProps, {TextVariant} from './props';
import BaseProps from '@props/Base';
import styles from './style';

type Props = TextProps & BaseProps;

export const Text: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>((props, ref) => {
  const {children, className, textColor = 'black', variant = TextVariant.Paragraph} = props;

  const rootClass = clsx(styles.root[variant], tc(textColor), className);
  const Tag = styles.tag(variant);

  return (
    <Tag ref={ref} className={rootClass}>
      {children}
    </Tag>
  );
});

export default Text;

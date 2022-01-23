import clsx from 'clsx';
import React, {forwardRef} from 'react';
import ButtonProps from './props';
import styles from './style';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      leftIcon,
      rightIcon,
      buttonColor = 'primary',
      variant = 'filled',
      type,
      fullWidth = false,
      size = 'base',
      ...buttonProps
    },
    ref,
  ) => {
    const buttonType = type === 'button' || type === 'submit' || type === 'reset' ? type : 'button';

    const rootClass = clsx(
      styles.root,
      styles.variant[variant][buttonColor],
      styles.disabled[`${buttonProps.disabled ?? false}`],
      styles.size[size],
      {'w-full': fullWidth},
      className,
    );

    return (
      <button ref={ref} type={buttonType} className={rootClass} {...buttonProps}>
        {leftIcon}
        <div className="mx-2">{children}</div>
        {rightIcon}
      </button>
    );
  },
);

Button.defaultProps = {
  buttonColor: 'primary',
  variant: 'filled',
  disabled: false,
  fullWidth: false,
};

export default Button;

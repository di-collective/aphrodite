import {HTMLProps, ReactElement} from 'react';
import ActionableProps from '@props/Actionable';
import BaseProps from '@props/Base';
import {ButtonColor} from '@props/Color';

export type ButtonVariant = 'text' | 'filled' | 'outlined';
export type ButtonSize = 'xs' | 'sm' | 'base' | 'lg';

export default interface ButtonProps
  extends HTMLProps<HTMLButtonElement>,
    BaseProps,
    ActionableProps {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  buttonColor?: ButtonColor;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  size?: ButtonSize;
}

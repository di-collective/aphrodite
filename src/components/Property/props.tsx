import {ReactElement} from 'react';

export default interface PropertyProps {
  fullWidth?: boolean;
  image?: ReactElement<SVGElement>;
  isActive: boolean;
  name?: string;
  value: string | number;

  onClick?: () => void;
}

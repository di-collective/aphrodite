import {ChangeEventHandler, ReactElement} from 'react';
import BaseProps from '@props/Base';

export interface Tool {
  key: string;
  caption?: string;
  icon: ReactElement<SVGElement>;
  onClick?: (tool: Tool) => void;
}

export default interface ToolbarProps extends BaseProps {
  href?: string;
  showTitle?: boolean;
  showBack?: boolean;
  showSearch?: boolean;
  showBurger?: boolean;
  searchValue?: string;

  title: string;
  tools?: Array<Tool>;

  onBackClicked?: () => void;
  onBurgerClicked?: () => void;
  onSearchChanged?: ChangeEventHandler<HTMLInputElement>;
}

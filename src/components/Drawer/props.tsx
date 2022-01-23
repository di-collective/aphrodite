import {ReactElement} from 'react';

export interface DrawerItem {
  caption: string;
  image?: string | ReactElement<SVGElement>;
  isActive?: boolean;
  onClick?: (drawerItem: DrawerItem) => void;
}

export default interface DrawerProps {
  isShowing?: boolean;
  items?: Array<DrawerItem>;
  position?: 'left' | 'right';

  onClose: () => void;
}

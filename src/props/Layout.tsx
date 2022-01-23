export type Spacing = 0 | 1 | 2 | 3 | 4;

export interface SpacingProps {
  x?: Spacing;
  y?: Spacing;
}

export default interface LayoutProps {
  layoutPadding?: SpacingProps;
}

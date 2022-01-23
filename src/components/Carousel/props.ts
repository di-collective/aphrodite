export interface CarouselItem {
  alt: string;
  img: string;
  thumb?: string;
}

export default interface CarouselProps {
  items?: Array<CarouselItem>;
  selectedIndex?: number;
  showNavigation?: boolean;

  onItemClicked?: (item: CarouselItem, index: number) => void;
}

import BaseProps from '@props/Base';

export default interface CardProps {
  image: string;
  alt: string;
  title: string;

  onClick?: (card: CardProps) => void;
}

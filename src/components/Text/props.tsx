import {TextColor} from '@props/Color';

export enum TextVariant {
  Title = 'title',
  Subtitle = 'subtitle',
  Quote = 'quote',
  Paragraph = 'paragraph',
  Bold = 'bold',
  Small = 'small',
  Subscript = 'subscript',
  Superscript = 'superscript',
}

export default interface TextProps {
  variant?: TextVariant;
  textColor?: TextColor;
}

import {TextVariant} from './props';

export default {
  root: {
    title: 'text-2xl font-bold',
    subtitle: 'text-lg font-semibold',
    quote: 'text-base italic p-2 my-2 shadow border bg-slate-100',
    paragraph: 'text-base mt-2',
    bold: 'text-base font-bold',
    small: 'text-sm',
    subscript: 'text-xs',
    superscript: 'text-xs',
  },
  tag: (variant: TextVariant) => {
    switch (variant) {
      case TextVariant.Title:
        return 'h2';
      case TextVariant.Subtitle:
        return 'h3';
      case TextVariant.Bold:
        return 'strong';
      case TextVariant.Small:
        return 'small';
      case TextVariant.Subscript:
        return 'sub';
      case TextVariant.Superscript:
        return 'sup';
      default:
        return 'p';
    }
  },
};

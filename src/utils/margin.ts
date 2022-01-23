import clsx from 'clsx';
import {Spacing} from '@props/Layout';

export const m = (value: Spacing) =>
  clsx({
    'm-0': value === 0,
    'm-1': value === 1,
    'm-2': value === 2,
    'm-3': value === 3,
    'm-4': value === 4,
  });

export const mx = (value: Spacing) =>
  clsx({
    'mx-0': value === 0,
    'mx-1': value === 1,
    'mx-2': value === 2,
    'mx-3': value === 3,
    'mx-4': value === 4,
  });

export const my = (value: Spacing) =>
  clsx({
    'my-0': value === 0,
    'my-1': value === 1,
    'my-2': value === 2,
    'my-3': value === 3,
    'my-4': value === 4,
  });

export default {
  m,
  mx,
  my,
};

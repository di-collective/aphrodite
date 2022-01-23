import clsx from 'clsx';
import {Spacing} from '@props/Layout';

export const p = (value: Spacing) =>
  clsx({
    'p-0': value === 0,
    'p-1': value === 1,
    'p-2': value === 2,
    'p-3': value === 3,
    'p-4': value === 4,
  });

export const px = (value: Spacing) =>
  clsx({
    'px-0': value === 0,
    'px-1': value === 1,
    'px-2': value === 2,
    'px-3': value === 3,
    'px-4': value === 4,
  });

export const py = (value: Spacing) =>
  clsx({
    'py-0': value === 0,
    'py-1': value === 1,
    'py-2': value === 2,
    'py-3': value === 3,
    'py-4': value === 4,
  });

export default {
  p,
  px,
  py,
};

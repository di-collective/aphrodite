import clsx from 'clsx';

export const tc = (value: string) =>
  clsx({
    'text-primary': value === 'primary',
    'text-black': value === 'black',
    'text-white': value === 'white',
  });

export default {
  tc,
};

export default {
  root: ['rounded-md', 'font-medium', 'flex', 'items-center'],
  variant: {
    text: {
      primary: ['bg-transparent', 'text-primary'],
      amber: ['bg-transparent', 'text-amber-500'],
      red: ['bg-transparent', 'text-red-500'],
    },
    filled: {
      primary: ['bg-primary', 'text-white'],
      amber: ['bg-amber-500', 'text-white'],
      red: ['bg-red-500', 'text-white'],
    },
    outlined: {
      primary: ['bg-transparent', 'border', 'border-primary', 'text-primary'],
      amber: ['bg-transparent', 'border', 'border-amber-500', 'text-amber-500'],
      red: ['bg-transparent', 'border', 'border-red-500', 'text-red-500'],
    },
  },
  size: {
    xs: 'text-xs p-1',
    sm: 'text-sm px-2 py-1',
    base: 'text-base px-4 py-2',
    lg: 'text-lg px-4 py-2',
  },
  disabled: {
    true: ['opacity-50', 'pointer-events-none'],
    false: ['transition-all', 'hover:opacity-75', 'focus:ring', 'active:opacity-50'],
  },
};

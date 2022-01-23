import React, {forwardRef, HTMLAttributes} from 'react';
import clsx from 'clsx';
import ToolbarProps from './props';

const PulseButton = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  (props, ref) => (
    <button
      ref={ref}
      className="flex items-center gap-1 text-base text-current hover:opacity-75 active:opacity-50"
      {...props}
    ></button>
  ),
);

const ToolIcon = forwardRef<SVGSVGElement, HTMLAttributes<SVGElement>>((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="white"
    {...props}
  />
));

export const Toolbar: React.FC<ToolbarProps> = (props) => {
  const {
    href,
    showTitle = false,
    showBack = false,
    showSearch = true,
    showBurger = true,
    searchValue,
    title,
    tools,

    onBackClicked,
    onBurgerClicked,
    onSearchChanged,
  } = props;
  return (
    <ul
      className={clsx(
        'flex',
        'flex-row',
        'gap-2',
        'items-center',
        'bg-primary',
        'p-2',
        'shadow',
        'text-base text-white',
      )}
    >
      {showBack && (
        <li key="tool-back" className="flex">
          <PulseButton onClick={onBackClicked}>
            <ToolIcon>
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </ToolIcon>
          </PulseButton>
        </li>
      )}
      {showTitle && (
        <li key="tool-title" className={clsx(showSearch ? 'shrink' : 'grow')}>
          <div className="block">
            <h2 className="text-white text-2xl font-semibold">
              <a href={href}>{title}</a>
            </h2>
          </div>
        </li>
      )}
      {showSearch && (
        <li key="tool-search" className="grow">
          <input
            type="text"
            placeholder="Search..."
            className={clsx(
              'rounded',
              'outline-none',
              'w-full',
              'px-2',
              'py-1',
              'text-base',
              'placeholder-primary-50',
              'text-white',
              'bg-primary-400',
            )}
            value={searchValue}
            onChange={onSearchChanged}
          />
        </li>
      )}
      {tools &&
        tools.map((t) => (
          <li key={`tool-${t.key}`} className="flex">
            <PulseButton onClick={t.onClick ? () => t.onClick!(t) : undefined}>
              <ToolIcon>{t.icon}</ToolIcon>
              {t.caption}
            </PulseButton>
          </li>
        ))}

      {showBurger && (
        <li key="tool-burger" className="flex">
          <button className="duration-200 focus:rotate-90" onClick={onBurgerClicked}>
            <ToolIcon>
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </ToolIcon>
          </button>
        </li>
      )}
    </ul>
  );
};

export default Toolbar;

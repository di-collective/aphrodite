import React from 'react';
import {Meta} from '@storybook/react';

import {Toolbar} from '../../src/components/Toolbar';

const meta: Meta = {
  title: 'Components/Toolbar',
  component: Toolbar,
  args: {
    href: undefined,
    showBack: true,
    showTitle: true,
    showSearch: true,
    showBurger: true,
    title: 'Title of the Page',
  },
  argTypes: {
    onBackClicked: () => 'onBackClicked',
    onBurgerClicked: () => 'onBurgerClicked',
    onSearchChanged: () => 'onSearchChanged',
  },
  parameters: {
    controls: {expanded: true},
  },
};

export default meta;

export const Default = (args) => {
  return <Toolbar {...args} />;
};

export const WithTools = () => {
  return (
    <Toolbar
      title="With Tools"
      showTitle
      showSearch={false}
      tools={[
        {
          key: 'chevron-left',
          icon: (
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          ),
          onClick: console.log,
        },
        {
          key: 'plus',
          icon: (
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          ),
          onClick: console.log,
        },
      ]}
    />
  );
};

import React from 'react';
import {Meta} from '@storybook/react';

import {Carousel} from '../../src/components/Carousel';

const meta: Meta = {
  title: 'Components/Carousel',
  component: Carousel,
  args: {
    items: [
      {
        img: 'https://picsum.photos/400',
      },
      {
        img: 'https://picsum.photos/600',
      },
      {
        img: 'https://picsum.photos/800',
      },
    ],
  },
  argTypes: {},
  parameters: {
    controls: {expanded: true},
  },
};

export default meta;

export const Default = (args) => {
  return (
    <div className="w-1/2">
      <Carousel {...args} />
    </div>
  );
};

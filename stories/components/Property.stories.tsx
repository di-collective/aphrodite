import React from 'react';
import {Meta} from '@storybook/react';

import {Property} from '../../src/components/Property';

const meta: Meta = {
  title: 'Components/Property',
  component: Property,
  args: {
    image: (
      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
    ),
    name: 'GPA',
    value: 4.0,
  },
  argTypes: {},
  parameters: {
    controls: {expanded: true},
  },
};

export default meta;

export const WithImage = (args) => {
  return <Property {...args}>Academic</Property>;
};

export const Collection = () => {
  return (
    <div className="flex gap-2 flex-wrap">
      <Property name="Brand" value="Honda" />
      <Property name="Model" value="Vario" />
      <Property name="Displacement" value="150cc" />
      <Property name="Color" value="Red" />
      <Property name="Front Brake" value="Disc" />
      <Property name="Rear Brake" value="Drum" />
      <Property name="Key" value="Keyless" />
    </div>
  );
};

export const Grid = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      <Property fullWidth name="Brand" value="Honda" />
      <Property fullWidth name="Model" value="Vario" />
      <Property fullWidth name="Displacement" value="150cc" />
      <Property fullWidth name="Color" value="Red" />
      <Property fullWidth name="Front Brake" value="Disc" />
      <Property fullWidth name="Rear Brake" value="Drum" />
      <Property fullWidth name="Key" value="Keyless" />
      <Property fullWidth name="Distance" value="17,500km" />
    </div>
  );
};

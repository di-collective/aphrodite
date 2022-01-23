import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Card} from '../../src/components/Card';
import clsx from 'clsx';

const meta: Meta = {
  title: 'Components/Card',
  component: Card,
  args: {
    image: 'https://v1.tailwindcss.com/img/card-top.jpg',
    title: 'Card Title One',
  },
  argTypes: {},
  parameters: {
    controls: {expanded: true},
  },
};

export default meta;

export const Default = (args) => {
  return <Card {...args} />;
};

export const WithChildren = (args) => {
  const ribbonClass = clsx(
    'absolute',
    'left-0',
    'top-2',
    'px-4',
    'py-1',
    'rounded-r-lg',
    'shadow-lg',
    'border-t',
    'border-r',
    'border-b',
    'border-primary-600',
    'text-sm',
    'bg-primary',
    'text-white',
  );
  return (
    <Card {...args}>
      <small className={ribbonClass}>Ribbon</small>
      <div className="mt-2">
        <p className="text-sm">Lorem ipsum sit dolor amet one</p>
        <p className="text-sm">Lorem ipsum sit dolor amet two</p>
      </div>
    </Card>
  );
};

import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Container, ContainerProps} from '../../src/components/Container';

const meta: Meta = {
  title: 'Components/Container',
  component: Container,
  argTypes: {},
  parameters: {
    controls: {expanded: true},
  },
};

export default meta;

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const Default = (args) => {
  return <Container {...args}>I am inside a container</Container>;
};

import React from 'react';
import {Meta} from '@storybook/react';
import {Button, ButtonProps} from '../../src/components/Button';
import clsx from 'clsx';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    buttonColor: 'primary',
    variant: 'filled',
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    onClick: {action: 'clicked'},
    leftIcon: {control: {type: null}},
    rightIcon: {control: {type: null}},
  },
  parameters: {
    controls: {expanded: true},
  },
};

export default meta;

export const Primary = (args) => {
  return (
    <div className="flex flex-col">
      <div className="m-1">
        <Button {...args}>Play With The Control!</Button>
      </div>
      <hr />
      <div className="m-1">
        <Button variant="text">Primary Text</Button>
      </div>
      <div className="m-1">
        <Button variant="outlined">Primary Outlined</Button>
      </div>
      <div className="m-1">
        <Button>Default Primary Filled</Button>
      </div>
      <div className="m-1">
        <Button fullWidth>Primary Filled Fullwidth</Button>
      </div>
    </div>
  );
};

export const Amber = (args) => {
  return (
    <div className="flex flex-col">
      <div className="m-1">
        <Button {...args}>Play With The Control!</Button>
      </div>
      <div className="m-1">
        <Button buttonColor="amber" variant="text">
          Amber Text
        </Button>
      </div>
      <div className="m-1">
        <Button buttonColor="amber" variant="outlined">
          Amber Outlined
        </Button>
      </div>
      <div className="m-1">
        <Button buttonColor="amber">Button Amber Filled</Button>
      </div>
      <div className="m-1">
        <Button buttonColor="amber" fullWidth>
          Amber Filled Fullwidth
        </Button>
      </div>
    </div>
  );
};

export const Red = (args) => {
  return (
    <div className="flex flex-col">
      <div className="m-1">
        <Button {...args}>Play With The Control!</Button>
      </div>
      <div className="m-1">
        <Button buttonColor="red" variant="text">
          Red Text
        </Button>
      </div>
      <div className="m-1">
        <Button buttonColor="red" variant="outlined">
          Red Outlined
        </Button>
      </div>
      <div className="m-1">
        <Button buttonColor="red">Button Red Filled</Button>
      </div>
      <div className="m-1">
        <Button buttonColor="red" fullWidth>
          Red Filled Fullwidth
        </Button>
      </div>
    </div>
  );
};

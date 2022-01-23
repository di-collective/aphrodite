import React from 'react';
import {Meta} from '@storybook/react';

import {InputField} from '../../src/components/InputField';

const meta: Meta = {
  title: 'Components/InputField',
  component: InputField,
  args: {},
  argTypes: {},
  parameters: {
    controls: {expanded: true},
  },
};

export default meta;

export const Text = (args) => {
  return (
    <>
      <InputField {...args} label="Text" placeholder="Placeholder" />
      <InputField label="Readonly" placeholder="Placeholder" readOnly />
      <InputField label="Disabled" placeholder="Placeholder" disabled />
    </>
  );
};

export const Number = (args) => {
  return (
    <>
      <InputField {...args} type="number" label="Number" placeholder="Placeholder" />
      <InputField type="number" label="Readonly" placeholder="Placeholder" readOnly />
      <InputField type="number" label="Disabled" placeholder="Placeholder" disabled />
    </>
  );
};

export const Date = () => (
  <>
    <InputField type="date" label="Date" placeholder="Placeholder" />
    <InputField type="date" label="Readonly" placeholder="Placeholder" readOnly />
    <InputField type="date" label="Disabled" placeholder="Placeholder" disabled />
  </>
);

export const Week = () => (
  <>
    <InputField type="week" label="Week" placeholder="Placeholder" />
    <InputField type="week" label="Readonly" placeholder="Placeholder" readOnly />
    <InputField type="week" label="Disabled" placeholder="Placeholder" disabled />
  </>
);

export const Month = () => (
  <>
    <InputField type="month" label="Month" placeholder="Placeholder" />
    <InputField type="month" label="Readonly" placeholder="Placeholder" readOnly />
    <InputField type="month" label="Disabled" placeholder="Placeholder" disabled />
  </>
);

export const DatetimeLocal = () => (
  <>
    <InputField type="datetime-local" label="Datetime Local" placeholder="Placeholder" />
    <InputField type="datetime-local" label="Readonly" placeholder="Placeholder" readOnly />
    <InputField type="datetime-local" label="Disabled" placeholder="Placeholder" disabled />
  </>
);

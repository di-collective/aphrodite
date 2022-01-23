import React from 'react';
import {Meta} from '@storybook/react';
import {Text} from '../src/components/Text';

const meta: Meta = {
  title: 'Typography/Text',
  // component: Text,
  // argTypes: {
  //   text: {
  //     color: {
  //       control: {type: 'radio'},
  //       options: ['primary', 'black', 'white'],
  //     },
  //   },
  // },
  // parameters: {
  //   controls: {expanded: false},
  // },
};

export default meta;

export const Default = () => {
  return (
    <>
      <Text variant="title">Title: Lorem Ipsum Sit Dolor Amet</Text>
      <Text variant="subtitle">Subtitle: Lorem Ipsum Sit Dolor Amet</Text>
      <Text variant="paragraph">Paragraph: Lorem Ipsum Sit Dolor Amet</Text>
      <Text variant="quote">Quote: Lorem Ipsum Sit Dolor Amet</Text>
      <Text variant="small" className="block">
        Small: Lorem Ipsum Sit Dolor Amet
      </Text>

      <div>
        <Text variant="paragraph" className="inline">
          Superscript:
        </Text>
        <Text variant="superscript">Lorem Ipsum Sit Dolor Amet</Text>
      </div>

      <div>
        <Text variant="paragraph" className="inline">
          Subscript:
        </Text>
        <Text variant="subscript">Lorem Ipsum Sit Dolor Amet</Text>
      </div>
    </>
  );
};

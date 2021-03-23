import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { DatePicker, DatePickerProps } from './index';

export default {
  title: 'Components/Date Picker',
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: `Date picker is based on the component *Calendar*.`,
      },
    },
  },
} as Meta;

const Template: Story<DatePickerProps> = (args) => <DatePicker {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  date: new Date(),
  onSelect: (date) => console.log('Date Picker:', date),
};

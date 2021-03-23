import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Calendar, CalendarProps } from './index';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: `The prop *date* is the default date for the component.
          If there is a selected date, you can press the left, right, up, and down key on the keyboard to move the selected date in the calendar.
          Insert the *showToday* prop true to show the button clicked can automatically select today.`,
      },
    },
  },
} as Meta;

const Template: Story<CalendarProps> = (args) => <Calendar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  date: null,
  onSelect: (date) => console.log('Calendar:', date),
};

import { CalendarProps } from '../index';

export type DatePickerProps = {
  date: Date | string | null;
  onSelect: (date: Date | null) => void;
  className?: string;
  inputClassName?: string;
  calendarProps?: Partial<CalendarProps>;
};

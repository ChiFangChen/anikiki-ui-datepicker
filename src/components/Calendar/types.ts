import { Moment } from 'moment';

export type CalendarProps = {
  date: Date | string | null;
  onSelect: (date: Date | null) => void;
  showToday?: boolean;
  DatePickerClassName?: string;
  MonthPickerClassName?: string;
  YearPickerClassName?: string;
};

export type Mode = 'year' | 'month' | 'date';

export type PickerCommonProps = {
  calendar: Moment;
  setCalendar: (date: Moment) => void;
  chosenDate: Moment | null;
  switchMode: (mode: Mode) => void;
  className?: string;
};

export type CalendarDatePickerProps = PickerCommonProps & {
  today: Moment;
  showToday: boolean;
  setChosenDate: (date: Moment | null) => void;
};

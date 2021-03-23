import React, { FC, useState, useEffect, useMemo } from 'react';
import moment, { Moment } from 'moment';

import { CalendarProps, Mode } from './types';
import { DatePicker } from './DatePicker';
import { MonthPicker } from './MonthPicker';
import { YearPicker } from './YearPicker';

export const Calendar: FC<CalendarProps> = ({
  date,
  onSelect,
  showToday = false,
  DatePickerClassName,
  MonthPickerClassName,
  YearPickerClassName,
}) => {
  /* initialized */

  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  /* set mode */

  const [mode, setMode] = useState<Mode>('date');
  const switchMode = (target: Mode) => setMode(target);

  /* time */

  const today = useMemo(() => moment().startOf('day'), []);

  const [calendar, setCalendar] = useState(
    moment(date || today).startOf('month')
  );
  const changeCalendar = (target: Moment) => setCalendar(target);

  const [chosenDate, setChosenDate] = useState(
    date ? moment(date).startOf('day') : null
  );
  const changeChosenDate = (target: Moment | null) => setChosenDate(target);

  useEffect(() => {
    if (ready && chosenDate) onSelect(moment(chosenDate).toDate());
  }, [chosenDate]);

  const render = () => {
    switch (mode) {
      case 'year':
        return (
          <YearPicker
            calendar={calendar}
            setCalendar={changeCalendar}
            chosenDate={chosenDate}
            switchMode={switchMode}
            className={YearPickerClassName}
          />
        );
      case 'month':
        return (
          <MonthPicker
            calendar={calendar}
            setCalendar={changeCalendar}
            chosenDate={chosenDate}
            switchMode={switchMode}
            className={MonthPickerClassName}
          />
        );
      case 'date':
      default:
        return (
          <DatePicker
            today={today}
            calendar={calendar}
            setCalendar={changeCalendar}
            chosenDate={chosenDate}
            setChosenDate={changeChosenDate}
            switchMode={switchMode}
            showToday={showToday}
            className={DatePickerClassName}
          />
        );
    }
  };

  return render();
};

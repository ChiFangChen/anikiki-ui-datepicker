import React, { FC, useState } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { Calendar } from '../Calendar';

import { DatePickerProps } from './types';
import { StyledDatePicker } from './styles';

export const DatePicker: FC<DatePickerProps> = ({
  date: defaultDate,
  onSelect,
  className,
  inputClassName,
  calendarProps,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [date, setDate] = useState<Date | null>(
    defaultDate ? moment(defaultDate).toDate() : null
  );

  const onDateSelect = (target) => {
    setDate(target);
    onSelect(target);
    onToggle();
  };

  const onToggle = () => setShow((oldState) => !oldState);

  return (
    <StyledDatePicker className={className}>
      <div
        className={`input${show ? ' active' : ''}${
          inputClassName ? ` ${inputClassName}` : ''
        }`}
        onClick={onToggle}
      >
        <FontAwesomeIcon icon={faCalendarAlt} />
        {date ? moment(date).format('YYYY-MM-DD') : null}
      </div>
      {show && (
        <div className="calendar-wrapper">
          <Calendar {...calendarProps} date={date} onSelect={onDateSelect} />
        </div>
      )}
    </StyledDatePicker>
  );
};

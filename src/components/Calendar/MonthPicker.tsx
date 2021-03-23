import React, { FC } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import { PickerCommonProps } from './types';
import { StyledCalendar, StyledTable } from './styles';

export const MonthPicker: FC<PickerCommonProps> = ({
  calendar,
  setCalendar,
  chosenDate,
  switchMode,
  className,
}) => {
  const handleYearRightClick = (e) => {
    e.preventDefault();
    setCalendar(moment(calendar).add(1, 'y').startOf('month'));
  };

  const handleYearLeftClick = (e) => {
    e.preventDefault();
    setCalendar(moment(calendar).add(-1, 'y').startOf('month'));
  };

  const monthClick = (e) => {
    setCalendar(moment(calendar).month(e.target.innerHTML));
    switchMode('date');
  };

  const renderMonths = () =>
    moment.monthsShort().map((month) => (
      <li key={month} className="month">
        <div
          className={`${
            chosenDate &&
            moment(calendar).month(month).isSame(chosenDate, 'month')
              ? ` active` // selected
              : '' // normal
          }`}
          onClick={monthClick}
        >
          {month}
        </div>
      </li>
    ));

  const switchYearMode = () => switchMode('year');

  return (
    <StyledCalendar className={className}>
      <div className="actions">
        <button className="prev" onClick={handleYearLeftClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div>
          <button className="current" onClick={switchYearMode}>
            {calendar.year()}
          </button>
        </div>
        <button className="next" onClick={handleYearRightClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <StyledTable>
        <ul>{renderMonths()}</ul>
      </StyledTable>
    </StyledCalendar>
  );
};

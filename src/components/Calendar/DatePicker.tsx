import React, { FC, useEffect, useCallback } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import { CalendarDatePickerProps } from './types';
import { StyledCalendar, StyledTable } from './styles';

export const DatePicker: FC<CalendarDatePickerProps> = ({
  today,
  calendar,
  setCalendar,
  chosenDate,
  setChosenDate,
  switchMode,
  showToday,
  className,
}) => {
  const handleMonthRightClick = (e) => {
    e.preventDefault();
    setCalendar(moment(calendar).add(1, 'M').startOf('month'));
  };

  const handleMonthLeftClick = (e) => {
    e.preventDefault();
    setCalendar(moment(calendar).add(-1, 'M').startOf('month'));
  };

  const handleTodayClick = () => {
    setChosenDate(moment(today));
    setCalendar(moment(today).startOf('month'));
  };

  const dateClick = (e) => {
    setChosenDate(moment(calendar).date(parseInt(e.target.innerHTML, 10)));
  };

  const renderDates = () => {
    const dates: any = [];

    const monthFirstDayWeekday = calendar.day();
    const monthDayCount = calendar.daysInMonth();
    const lastMonthDayCount = moment(calendar).add(-1, 'M').daysInMonth();

    // last month
    for (let i = 0; i < monthFirstDayWeekday; i += 1) {
      dates.unshift(
        <li key={`unfocused-prev-${i}`} className="date">
          <div className="unfocused" onClick={handleMonthLeftClick}>
            {lastMonthDayCount - i}
          </div>
        </li>
      );
    }

    // current month
    for (let j = 1; j <= monthDayCount; j += 1) {
      dates.push(
        <li key={`focused${j}`} className="date">
          <div
            className={`${
              chosenDate &&
              moment(moment(calendar).date(j)).isSame(chosenDate, 'day')
                ? ` active` // selected
                : '' // normal
            }${
              chosenDate &&
              moment(moment(calendar).date(j)).isSame(today, 'day')
                ? ` today` // today
                : '' // normal
            }`}
            onClick={dateClick}
          >
            {j}
          </div>
        </li>
      );
    }

    // next month
    // fill up the dates to 6 rows
    let j = 1;
    while (dates.length % 7 !== 0 || dates.length / 7 < 6) {
      dates.push(
        <li key={`unfocused-next-${j}`} className="date">
          <div className="unfocused" onClick={handleMonthRightClick}>
            {j}
          </div>
        </li>
      );
      j += 1;
    }

    return dates;
  };

  /* when click on keyboard */

  const handleDateRightClick = useCallback(() => {
    const newChosenDate = moment(chosenDate).add(1, 'd');
    setChosenDate(newChosenDate);
    setCalendar(moment(newChosenDate).startOf('month'));
  }, [chosenDate, setChosenDate, setCalendar]);

  const handleDateLeftClick = useCallback(() => {
    const newChosenDate = moment(chosenDate).add(-1, 'd');
    setChosenDate(newChosenDate);
    setCalendar(moment(newChosenDate).startOf('month'));
  }, [chosenDate, setChosenDate, setCalendar]);

  const handleDateUpClick = useCallback(() => {
    const newChosenDate = moment(chosenDate).add(-7, 'd');
    setChosenDate(newChosenDate);
    setCalendar(moment(newChosenDate).startOf('month'));
  }, [chosenDate, setChosenDate, setCalendar]);

  const handleDateDownClick = useCallback(() => {
    const newChosenDate = moment(chosenDate).add(7, 'd');
    setChosenDate(newChosenDate);
    setCalendar(moment(newChosenDate).startOf('month'));
  }, [chosenDate, setChosenDate, setCalendar]);

  const onKeydown = useCallback(
    (e) => {
      e.preventDefault();

      if (chosenDate) {
        if (e.keyCode === 37) {
          handleDateLeftClick();
        }
        if (e.keyCode === 39) {
          handleDateRightClick();
        }
        if (e.keyCode === 38) {
          handleDateUpClick();
        }
        if (e.keyCode === 40) {
          handleDateDownClick();
        }
      }
    },
    [
      chosenDate,
      handleDateLeftClick,
      handleDateRightClick,
      handleDateUpClick,
      handleDateDownClick,
    ]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [onKeydown]);

  const switchMonthMode = () => switchMode('month');

  return (
    <StyledCalendar className={className}>
      <div className="actions">
        <button className="prev" onClick={handleMonthLeftClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div>
          <button className="current" onClick={switchMonthMode}>
            {moment.months()[calendar.month()]} {calendar.year()}
          </button>
          {showToday && (
            <button className="today" onClick={handleTodayClick}>
              Today
            </button>
          )}
        </div>
        <button className="next" onClick={handleMonthRightClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <StyledTable>
        <ul>
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((weekday) => (
            <li key={weekday} className="date">
              {weekday}
            </li>
          ))}
        </ul>

        <ul>{renderDates()}</ul>
      </StyledTable>
    </StyledCalendar>
  );
};

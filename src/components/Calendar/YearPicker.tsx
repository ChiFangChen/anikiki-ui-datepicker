import React, { FC, useMemo } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import { PickerCommonProps } from './types';
import { StyledCalendar, StyledTable } from './styles';

export const YearPicker: FC<PickerCommonProps> = ({
  calendar,
  setCalendar,
  chosenDate,
  switchMode,
  className,
}) => {
  const currentYears = useMemo(() => {
    const currentYear = moment(calendar).year();
    const years = [currentYear];
    for (let i = 1; i <= 5; i += 1) {
      years.unshift(currentYear - i);
    }
    for (let i = 1; i <= 6; i += 1) {
      years.push(currentYear + i);
    }
    return years;
  }, [calendar]);

  const handleYearRightClick = (e) => {
    e.preventDefault();
    setCalendar(moment(calendar).add(10, 'y').startOf('month'));
  };

  const handleYearLeftClick = (e) => {
    e.preventDefault();
    setCalendar(moment(calendar).add(-10, 'y').startOf('month'));
  };

  const yearClick = (e) => {
    setCalendar(moment(calendar).year(e.target.innerHTML));
    switchMode('month');
  };

  const renderYears = () =>
    currentYears.map((year, i) => {
      let onClick = yearClick;
      if (i === 0) onClick = handleYearLeftClick;
      if (i === currentYears.length - 1) onClick = handleYearRightClick;
      return (
        <li key={year} className="year">
          <div
            className={`${
              chosenDate &&
              moment(calendar).year(year).isSame(chosenDate, 'year')
                ? ` active` // selected
                : '' // normal
            }${
              i === 0 || i === currentYears.length - 1
                ? ` unfocused` // unfocused
                : '' // normal
            }`}
            onClick={onClick}
          >
            {year}
          </div>
        </li>
      );
    });

  return (
    <StyledCalendar className={className}>
      <div className="actions">
        <button className="prev" onClick={handleYearLeftClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div>
          <div className="current">
            {`${currentYears[1]}~${currentYears[11]}`}
          </div>
        </div>
        <button className="next" onClick={handleYearRightClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <StyledTable>
        <ul>{renderYears()}</ul>
      </StyledTable>
    </StyledCalendar>
  );
};

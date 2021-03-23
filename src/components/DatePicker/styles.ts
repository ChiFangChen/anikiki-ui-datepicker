import styled from 'styled-components';

export const StyledDatePicker = styled.div`
  position: relative;

  .input {
    padding: 6px 8px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 12px;
    color: #333;
    width: 100px;
    cursor: pointer;

    svg {
      color: #666;
      margin-right: 8px;
    }

    &.active {
      border-color: #25c1ca;
      svg {
        color: #25c1ca;
      }
    }
  }

  .calendar-wrapper {
    position: absolute;
    border: 1px solid #ddd;
    box-shadow: 0px 2px 6px 0px #ddd;
  }
`;

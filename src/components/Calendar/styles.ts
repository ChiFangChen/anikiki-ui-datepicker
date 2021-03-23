import styled from 'styled-components';

export const StyledCalendar = styled.div`
  padding: 10px 0;
  user-select: none;
  background-color: white;

  .actions {
    display: flex;
    justify-content: space-between;
    margin: 8px 4%;

    button {
      border: none;
      background: transparent;
      cursor: pointer;
      outline: transparent;

      &:hover {
        opacity: 0.8;
      }
    }

    .current {
      display: block;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

export const StyledTable = styled.div`
  ul {
    text-align: left;
    margin-bottom: 0;
    padding-left: 0;

    li {
      display: inline-block;
      font-weight: bold;
      text-align: center;
      font-size: 12px;

      &.date {
        width: 14.28%;
        padding: 4px 0;

        > div {
          color: black;
          padding: 8px;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
          width: 14px;
          height: 14px;

          &.today {
            color: #db3d44;
          }
        }
      }

      &.month,
      &.year {
        width: 25%;
        margin: 10px 0;

        > div {
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
        }
      }

      > div {
        &.unfocused {
          color: #eeeeee;
        }

        &.active {
          background-color: #db3d44;
          color: #fff !important;
        }
      }
    }
  }
`;

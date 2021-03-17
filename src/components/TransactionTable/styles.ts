import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;

  h2 {
    color: var(--blue);
    font-weight: 300;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-title);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &.deposit {
        color: var(--blue-light);
      }

      &.withdraw {
        color: var(--red);
      }

      div {
        display: flex;
        align-items: center;
        justify-content: start;
        
        button {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          margin-right: 10px;
          box-shadow: 2px 2px 4px #ccc;
          color: var(--text-body);

          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            box-shadow: 1px 1px 4px #ccc;
          }

          &.editBtn:hover {
            color: #4E7AC7;
          }

          &.deletBtn:hover {
            color: #E8840C;
          }
        }
          button + button {
          }
      }

    }
  }
`;
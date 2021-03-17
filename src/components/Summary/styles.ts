import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  .container {
      position: relative;

    .content {
      background-color: var(--shape);
      padding: 1.5rem 2rem;
      border-radius: 0.25rem;
      color: var(--text-title);

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 400;
        line-height: 3rem;
      }

      .income {
        color: var(--green);
      }

      .outcome {
        color: var(--red);
      }

      &.highLight-background {
        background-color: var(--green);
        color: #FFF;
      }
    }
  }
`;
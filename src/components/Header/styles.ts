import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue)
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 300;
      color: #f1f1f1;
    }

  }
  button {
    padding: 0.8rem 3rem;
    background-color: #35478C;
    border: none;
    color: #f1f1f1;
    border-radius: 0.25rem;
    transition: filter 200ms;
    
    &:hover {
      filter: brightness(0.9);
    }
  }

`;
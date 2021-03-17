import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #071A40;
    --blue-light: #6933FF;

    --alert: #FFA414;
    --red-state: #F44336;
    --good: #7FB2F0;
    --green: #33CC95;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%%; // 14px
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    position: relative;
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 3rem;
    border-radius: 0.25rem;
  }

  .react-modal-btn-close {
    position: absolute;
    top: 1rem;
    right: 2rem;
    border: none;
    background-color: transparent;
    transition: 200ms;

    &:hover {
      filter: brightness(0.9);
    }
  }

`
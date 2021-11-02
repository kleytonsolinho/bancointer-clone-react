import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #ff8700;
    --primary-100: rgba(255, 135, 0, 0.5);
    --orange-300: #fcb46d;
    --background-primary: #fa7a01;
    --background-cashback: #eb7000;
    --secondary: #8c91a9;
    --gray-light: #f5f6fa;
    --gray-dark: #4b4e5c;
    --success: #8dc63f;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f5f5f5;
    --dark: #4b4e5c;
    --white: #fff;
    --black: #000;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--white);
    color: var(--black);
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--primary);
  }

  body::-webkit-scrollbar-track {
    background-color: transparent;
  }

  body,
  input,
  textarea,
  select,
  button {
    font-weight: 400;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;


import styled from 'styled-components';

export const Container = styled.aside`
  width: 250px;
  height: 38px;

  position: fixed;
  right: 50px;
  bottom: 0;
  z-index: 10;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  
  border: none;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  text-transform: uppercase;
  color: var(--white);
  background-color: var(--success);
`;

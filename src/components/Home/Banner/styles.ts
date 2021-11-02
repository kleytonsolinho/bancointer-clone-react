import styled from 'styled-components';

import { FaPlay } from 'react-icons/fa';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  video {
    width: 100%;
    height: 100%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;
`;

export const Button = styled.button`
  margin: 2rem 0;
  padding: 3rem;
  
  border: none;
  border-radius: 50%;
  background-color: var(--primary-100);
  cursor: pointer;
`;

export const IconPlay = styled(FaPlay)`
  font-size: 3rem;
  color: var(--white);
`;

export const Title = styled.h1`
  font-weight: normal;
  color: var(--white);
  white-space: nowrap;
`;


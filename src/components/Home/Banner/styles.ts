import styled from 'styled-components';

import { FaPlay } from 'react-icons/fa';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 8;

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

export const ShadowLayer = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 11;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.8);

  iframe {
    width: 75vw; 
    height: 75vh;

    border: none;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 50px;
  right: 125px;

  font-size: 2rem;
  color: var(--white);

  border: none;
  background-color: transparent;
`;



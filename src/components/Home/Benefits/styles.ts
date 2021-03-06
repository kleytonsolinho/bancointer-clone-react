import styled from 'styled-components';

import imgBanner from '../../../assets/images/bg-section-beneficios-desktop-xl.jpg'

export const Container = styled.section`
  width: 100vw;
  height: 440px;
  margin-top: -100px;

  position: relative;
  z-index: 3;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Banner = styled.div`
  width: 50%;
  height: 100%;

  background-image: url(${imgBanner});
  background-repeat: no-repeat;
  background-color: var(--background-primary);
`;

export const Color = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  background-color: var(--background-primary);
`;

export const Title = styled.h1`
  max-width: 556px;
  padding: 0 2rem;
  
  font-size: 2.5rem;
  color: var(--white);
`;

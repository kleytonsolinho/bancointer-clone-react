import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 612px;

  position: relative;
  z-index: 1;

  background-color: var(--gray-light);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 612px;
  margin: 0 auto;
  padding: 0 2rem;

  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Image = styled.img`
  height: 80%;
`;

export const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const SubTitle = styled.strong`
  font-size: 1.5rem;
  color: var(--gray-dark);
`;

export const Title = styled.h1`
  margin: 1.5rem 0;

  font-size: 2rem;
  color: var(--black);
`;

export const Description = styled.p`
  margin-bottom: 2rem;

  font-size: 1rem;
  color: var(--secondary);
`;


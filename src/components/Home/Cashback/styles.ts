import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 475px;

  background-color: var(--background-cashback);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: 0 2rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: var(--white);
`;

export const Title = styled.strong`
  font-size: 2rem;
  font-weight: normal;
`;

export const Amount = styled.h1`
  font-size: 5rem;

  span {
    font-weight: normal;
    color: var(--orange-300);
  }
`;

export const SubTitle = styled.p`
  margin: 2rem 0;
  font-size: 1rem;
`;

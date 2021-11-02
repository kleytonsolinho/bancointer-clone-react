import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  max-width: 1200px;
  height: 587px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Content = styled.div`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  border-bottom: 1px solid var(--secondary);
`;

export const App = styled.section``;

export const Store = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  img:nth-of-type(2) {
    margin: 0.5rem 0 1rem 0;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  
  font-size: 1rem;
`;

export const Image = styled.img`
  width: 90%;
  cursor: pointer;

  &:hover {
    color: var(--primary);
  }
`;

export const Social = styled.div``;

export const Logo = styled.img`
  cursor: pointer;

  & + img {
    margin-left: 10px;
  }
`;

export const ForYou = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Link = styled(LinkRouter)`
  margin: 0.5rem 0;

  font-size: 0.7rem;
  color: var(--dark);

  &:hover {
    color: var(--primary);
  }
`;

export const Help = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Contact = styled.section``;

export const Phone = styled.div`
  margin: 0.5rem 0;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  &:nth-last-of-type() {
    margin-top: 0.5rem;
  }
`;

export const Text = styled.p`
  font-size: 0.7rem;
  color: var(--dark);
`;

export const Number = styled.strong`
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    color: var(--primary);
  }
`;

export const Menu = styled.div`
  margin: 2rem 0;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const MenuLink = styled(LinkRouter)`
  font-size: 0.7rem;
  color: var(--dark);

  &:hover {
    color: var(--primary);
  }

  & + a {
    margin-left: 1rem;
  }
`;

export const Info = styled.div``;

export const Address = styled.p`
  font-size: 0.7rem;
  color: var(--dark);
`;

export const CNPJ = styled.p`
  font-size: 0.7rem;
  color: var(--dark);
`;

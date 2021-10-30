import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';

interface LanguageProps {
  isEnglish: boolean;
}

export const Container = styled.header`
  width: 100%;
  height: 75px;
  padding: 0 2rem;
  margin: 0 auto;

  position: fixed;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background-color: var(--white);
`;

export const Logo = styled.img`
  height: 90%;
  margin-left: 10px;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
`;

export const MenuItem = styled.li`
  margin: 0 2rem;
  padding: 0.5rem;
  
  display: flex;
  align-items: center;
  
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--light);
  }
  
  & + li {
    margin-left: 2rem;
  }
`;

export const IconArrow = styled(FaAngleDown)`
  margin-left: 8px;
  color: var(--primary);
`;

export const Divider = styled.div`
  width: 3px;
  height: 100%;

  background-color: aqua;

  /* display: flex;
  align-items: center;
  justify-content: center; */

  &:before {
    content: '';
    border: 1px dashed black;
  }

  
`;

export const ButtonContainer = styled.div`
  margin: 0 2rem;
`;

export const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 10px;  

  &:nth-of-type(1) {
    background-color: var(--primary);
    color: var(--white);
  }

  &:nth-of-type(2) {
    border: 1px solid var(--primary);
    background-color: var(--white);
    color: var(--primary);

    &:hover {
      background-color: var(--light);
    }
  }

  & + button {
    margin-left: 2rem;
  }
`;

export const Language = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonFlag = styled.button`
  border: none;
  background-color: transparent;
`;

export const FlagBR = styled.img<LanguageProps>`
  width: 16px;
  height: 16px;

  cursor: pointer;

  opacity: ${( props => props.isEnglish ? 0.3 : 1 )}
`;

export const FlagUS = styled.img<LanguageProps>`
  width: 16px;
  height: 16px;
  margin-left: 10px;

  cursor: pointer;
  opacity: ${( props => props.isEnglish ? 1 : 0.3 )}
`;


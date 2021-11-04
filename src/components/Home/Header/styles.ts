import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';

interface LanguageProps {
  isEnglish: boolean;
}

interface MenuProps {
  scrolled?: boolean;
}

interface SideBarProps {
  isOpen: boolean;
}

interface HelpCenterProps {
  margin: number;
}

export const Container = styled.header<MenuProps>`
  width: 100%;
  height: 75px;
  padding: 0 2rem;
  margin: 0 auto;

  position: fixed;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background: 
    ${( props) => props.scrolled 
    ? 
      'linear-gradient(180deg, var(--primary), #ff500f)' 
    : 
      'var(--white)'};
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
`;

export const MenuItem = styled.li<MenuProps>`
  padding: 0.5rem;
  
  display: flex;
  align-items: center;
  
  border-radius: 10px;
  font-weight: bold;
  color: ${(props) => props.scrolled ? 'var(--white)' : 'var(--black)'};
  cursor: pointer;

  &:hover {
    background-color: rgba(0,0,0,0.3);
  }
  
  & + li {
    margin-left: 0.5rem;
  }
`;

export const IconArrow = styled(FaAngleDown)<MenuProps>`
  margin-left: 8px;
  color: ${(props) => props.scrolled ? 'var(--white)' : 'var(--primary)'};
`;

export const Divider = styled.div`
  width: 3px;
  height: 100%;

  background-color: aqua;

  &:before {
    content: '';
    border: 1px dashed black;
  }
`;

export const ButtonContainer = styled.div`
  margin: 0 2rem;
`;

export const Button = styled.button<MenuProps>`
  padding: ${(props) => props.scrolled ? '0.5rem 1rem' : '1rem'};
  border: none;
  border-radius: 10px;
  font-weight: bold;

  &:nth-of-type(1) {
    background-color: ${(props) => props.scrolled ? 'var(--success)' : 'var(--primary)'};
    color: var(--white);
  }

  &:nth-of-type(2) {
    border: ${(props) => props.scrolled ? 'none' : '1px solid var(--primary)'};
    background-color: ${(props) => props.scrolled ? 'transparent' : 'var(--white)'};
    color: ${(props) => props.scrolled ? 'var(--white)' : 'var(--primary)'};

    &:hover {
      background-color: ${(props) => props.scrolled ? 'rgba(0,0,0,0.3)' : 'var(--light)'};
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
  width: 20px;
  height: 20px;

  cursor: pointer;

  opacity: ${( props => props.isEnglish ? 0.3 : 1 )};
`;

export const FlagUS = styled.img<LanguageProps>`
  width: 20px;
  height: 20px;
  margin-left: 10px;

  cursor: pointer;
  opacity: ${( props => props.isEnglish ? 1 : 0.3 )};
`;

export const HelpCenter = styled.aside<HelpCenterProps>`
  width: 260px;
  height: 54px;

  position: fixed;
  top: 75px;
  right: ${(props) => props.margin}px;
  z-index: 9;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--white);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 3px 11px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const Image = styled.img``;

export const Text = styled.p`
  font-size: 1.2rem;
  padding: 0 10px;
`;


export const Overlay = styled.section<SideBarProps>`
  width: 100vw;
  height: 100vh;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 11;
  
  display: ${( props => props.isOpen ? 'block' : 'none')};

  background-color: rgba(0, 0, 0, 0.4);
`;

export const SideBar = styled.div<SideBarProps>`
  width: 600px;
  height: 100vh;

  position: fixed;
  right: 0;
  top: 0;

  background-color: var(--white);
`;

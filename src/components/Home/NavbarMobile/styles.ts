import styled from 'styled-components';

import { FaAlignJustify, FaMixer } from 'react-icons/fa';

interface LanguageProps {
  isEnglish: boolean;
}

interface MenuProps {
  scrolled: boolean;
}

interface SideBarProps {
  isOpen: boolean;
}

export const Container = styled.header<MenuProps>`
  width: 100%;
  height: 50px;
  padding: 0 2rem;
  margin: 0 auto;

  position: fixed;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background-color: ${( props) => props.scrolled ? 'var(--primary)' : 'var(--white)'};
`;

export const Menu = styled.nav`
  width: 90%;
  height: 100%;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const Logo = styled.img`
  height: 90%;
  margin-left: 10px;
`;

export const IconMenu = styled(FaAlignJustify)`
  font-size: 2rem;
  color: var(--primary);
`;

export const IconMenuClose = styled(FaMixer)`
  font-size: 2rem;
  color: var(--primary);
`;

export const Language = styled.div`
  width: 10%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
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

export const Overlay = styled.div<SideBarProps>`
  width: 100vw;
  height: 100vh;

  position: absolute;
  left: 0;
  top: 0;

  overflow: hidden;
  
  display: ${( props => props.isOpen ? 'block' : 'none')};

  background-color: rgba(0, 0, 0, 0.4);
`;

export const SideBar = styled.div<SideBarProps>`
  width: 320px;
  height: 100vh;
  margin-top: 50px;

  position: relative;
  left: 0;
  top: 0;

  background-color: var(--white);
`;

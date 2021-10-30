import { useState } from 'react';
import { Link } from 'react-router-dom';

import imgLogo from '../../assets/images/logo.svg';
import imgUs from '../../assets/images/us.svg';
import imgBr from '../../assets/images/br.svg';

import { 
  Container,
  Menu,
  Button,
  Logo,
  IconMenu,
  IconMenuClose,
  Language,
  FlagUS,
  FlagBR,
} from './styles';

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnglish, setEnglish] = useState(false);

  function handleClickMenu() {
    setIsOpen(!isOpen);
  }

  function handleClickLanguage() {
    setEnglish(!isEnglish);
  }

  return (
    <Container>
      <Menu>
        {isOpen ? (
          <Button onClick={handleClickMenu}>
            <IconMenuClose />
          </Button>
        ) : (
          <Button onClick={handleClickMenu}>
            <IconMenu />
          </Button>
        )}
        <Link to="/">
          <Logo src={imgLogo} alt="Logo do Banco Inter" />
        </Link>
      </Menu>
      <Language>
        <Button onClick={handleClickLanguage}>
          <FlagBR src={imgBr} alt="Bandeira do Brasil" isEnglish={isEnglish} />
        </Button>
        <Button onClick={handleClickLanguage}>
          <FlagUS src={imgUs} alt="Bandeira dos EUA" isEnglish={isEnglish} />
        </Button>
      </Language>
    </Container>
  );
}
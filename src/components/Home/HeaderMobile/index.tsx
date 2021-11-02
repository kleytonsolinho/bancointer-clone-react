import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import imgLogo from '../../../assets/images/logo-laranja.svg';
import imgUs from '../../../assets/images/us.svg';
import imgBr from '../../../assets/images/br.svg';

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
  Overlay,
  SideBar,
} from './styles';

interface MenuProps {
  hasScrolled: boolean;
}

export default function HeaderMobile({ hasScrolled }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnglish, setEnglish] = useState(false);

  function handleClickMenu() {
    setIsOpen(!isOpen);
  }

  function handleClickLanguage() {
    setEnglish(!isEnglish);
  }

  useEffect(() => {
    if(hasScrolled) {
      
    }
  }, [hasScrolled])

  return (
    <>
      <Container scrolled={hasScrolled}>
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
      <Overlay isOpen={isOpen}>
        <SideBar isOpen={isOpen}>

        </SideBar>
      </Overlay>
    </>
  );
}
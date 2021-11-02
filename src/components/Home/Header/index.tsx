import { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoSVG from '../../Global/Assets/Logo';

import imgUs from '../../../assets/images/us.svg';
import imgBr from '../../../assets/images/br.svg';
import imgBabi from '../../../assets/images/babi-profile.png'

import { 
  Container,
  Nav,
  Menu,
  MenuItem,
  IconArrow,
  Divider,
  ButtonContainer,
  Button,
  Language,
  ButtonFlag,
  FlagBR,
  FlagUS,
  HelpCenter,
  Image,
  Text,
  Overlay,
  SideBar,
} from './styles';

interface MenuProps {
  hasScrolled: boolean;
}

export default function Header({ hasScrolled }: MenuProps) {
  const [isEnglish, setEnglish] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleClickMenu() {
    setIsOpen(!isOpen);
  }

  function handleClickLanguage() {
    setEnglish(!isEnglish);
  }
  
  return (
    <>
      <Container scrolled={hasScrolled}>
        <Nav>
          <Link to="/">
            <LogoSVG scrolled={hasScrolled} />
          </Link>
          <Menu>
            <MenuItem scrolled={hasScrolled}>
              O Inter
              <IconArrow scrolled={hasScrolled} />
            </MenuItem>
            <MenuItem scrolled={hasScrolled}>
              Pra Você
              <IconArrow scrolled={hasScrolled} />
            </MenuItem>
            <MenuItem scrolled={hasScrolled}>
              Empresas
              <IconArrow scrolled={hasScrolled} />
            </MenuItem>
            <MenuItem scrolled={hasScrolled}>
              Blog
              <IconArrow scrolled={hasScrolled} />
            </MenuItem>
            <MenuItem scrolled={hasScrolled}>
              Portal RI
              <IconArrow scrolled={hasScrolled} />
            </MenuItem>
          </Menu>

          <Divider />

          <ButtonContainer>
            <Button 
              type="button" 
              onClick={handleClickMenu}
              scrolled={hasScrolled}
            >
              Abra a sua conta
            </Button>
            <Button 
              type="button"
              scrolled={hasScrolled}
            >
              Acessar
            </Button>
          </ButtonContainer>

          <Language>
            <ButtonFlag type="button" onClick={handleClickLanguage}>
              <FlagBR src={imgBr} alt="Bandeira do Brasil" isEnglish={isEnglish} />
            </ButtonFlag>
            <ButtonFlag type="button" onClick={handleClickLanguage}>
              <FlagUS src={imgUs} alt="Bandeira dos EUA" isEnglish={isEnglish} />
            </ButtonFlag>
          </Language>
        </Nav>
      </Container>

      <HelpCenter>
        <Image src={imgBabi} alt="Foto da atendente Babi" />
        <Text>Central de Ajuda</Text>
        <IconArrow />
      </HelpCenter>

      <Overlay isOpen={isOpen} onClick={handleClickMenu}>
        <SideBar isOpen={isOpen}>

        </SideBar>
      </Overlay>
    </>
  );
}
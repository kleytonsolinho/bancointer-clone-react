import { useState, useEffect } from 'react';
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
  const [screenWidth, setScreenWidth] = useState(0);

  function handleClickMenu() {
    setIsOpen(!isOpen);
  }

  function handleClickLanguage() {
    setEnglish(!isEnglish);
  }

  useEffect(() => {
    let width = window.innerWidth;

    if (width <= 1200) {
      width -= 32;
      console.log(`Menor que 1200: ${width}`);
    }

    if (width > 1200) {
      width = (width-1232)/2;
      console.log(`Maior que 1200: ${width}`);
    }

    setScreenWidth(width);
  }, [])
  
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

          <HelpCenter margin={screenWidth}>
            <Image src={imgBabi} alt="Foto da atendente Babi" />
            <Text>Central de Ajuda</Text>
            <IconArrow />
          </HelpCenter>
        </Nav>
      </Container>

      <Overlay isOpen={isOpen} onClick={handleClickMenu}>
        <SideBar isOpen={isOpen}>

        </SideBar>
      </Overlay>
    </>
  );
}
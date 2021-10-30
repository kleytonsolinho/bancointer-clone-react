import { useState } from 'react';
import { Link } from 'react-router-dom';

import imgLogo from '../../assets/images/logo.svg';
import imgUs from '../../assets/images/us.svg';
import imgBr from '../../assets/images/br.svg';

import { 
  Container,
  Logo,
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
} from './styles';

export default function Navbar() {
  const [isEnglish, setEnglish] = useState(false);

  function handleClickLanguage() {
    setEnglish(!isEnglish);
  }
  
  return (
    <Container>
      <Link to="/">
        <Logo src={imgLogo} alt="Logo do Banco Inter" />
      </Link>
      <Nav>
        <Menu>
          <MenuItem>
            O Inter
            <IconArrow />
          </MenuItem>
          <MenuItem>
            Pra Você
            <IconArrow />
          </MenuItem>
          <MenuItem>
            Empresas
            <IconArrow />
          </MenuItem>
          <MenuItem>
            Blog
            <IconArrow />
          </MenuItem>
          <MenuItem>
            Portal RI
            <IconArrow />
          </MenuItem>
        </Menu>
        <Divider />
        <ButtonContainer>
          <Button type="button">Abra a sua conta</Button>
          <Button type="button">Acessar</Button>
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
  );
}
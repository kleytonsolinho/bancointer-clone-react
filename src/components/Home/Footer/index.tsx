import imgApple from '../../../assets/images/apple-store.svg';
import imgGoogle from '../../../assets/images/google-store.svg';

import imgInstagram from '../../../assets/images/instagram.svg';
import imgLinkedin from '../../../assets/images/linkedin.svg';
import imgFacebook from '../../../assets/images/facebook.svg';
import imgTwitter from '../../../assets/images/twitter.svg';
import imgYoutube from '../../../assets/images/youtube.svg';

import { 
  Container,
  Content,
  App,
  Store,
  Title,
  Image,
  Social,
  Logo,
  ForYou,
  Link,
  Help,
  Contact,
  Phone,
  Text,
  Number,
  Menu,
  MenuLink,
  Info,
  Address,
  CNPJ,
} from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <App>
          <Store>
            <Title>Baixe o SuperApp</Title>
            <Image src={imgApple} alt="Logo da Apple Store" />
            <Image src={imgGoogle} alt="Logo da Google Store" />
          </Store>
          <Social>
            <Title>Siga o Inter</Title>
            <Logo src={imgInstagram} alt="Logo do Instagram" />
            <Logo src={imgLinkedin} alt="Logo do Linkedin" />
            <Logo src={imgFacebook} alt="Logo do Facebook" />
            <Logo src={imgTwitter} alt="Logo do Twitter" />
            <Logo src={imgYoutube} alt="Logo do Youtube" />
          </Social>
        </App>
        <ForYou>
          <Title>Pra você</Title>
          <Link to="/">Conta Digital Pessoa Física</Link>
          <Link to="/">Conta Digital Pessoa Jurídica</Link>
          <Link to="/">Conta Digital MEI</Link>
          <Link to="/">Empréstimos</Link>
          <Link to="/">Inter Invest</Link>
          <Link to="/">Inter Shop</Link>
          <Link to="/">Seguros</Link>
          <Link to="/">Orange Friday</Link>
        </ForYou>
        <Help>
          <Title>Precisa de ajuda?</Title>
          <Link to="/">Central de Ajuda</Link>
          <Link to="/">Canais de atendimento</Link>
          <Link to="/">Ouvidoria</Link>
          <Link to="/">Operações</Link>
          <Link to="/">Por que não cobramos tarifas?</Link>
          <Link to="/">2ª via do boleto</Link>
          <Link to="/">Saldo devedor</Link>
          <Link to="/">Negocie sua divida</Link>
          <Link to="/">Informe de rendimentos</Link>
        </Help>
        <Contact>
          <Title>Fale com a gente</Title>
          <Phone>
            <Text>Capitais e regiões metropolitanas</Text>
            <Number>3003 4070</Number>
          </Phone>
          <Phone>
            <Text>Demais localidades</Text>
            <Number>0800 940 0007</Number>
          </Phone>
          <Phone>
            <Text>SAC (24 horas)</Text>
            <Number>0800 940 9999</Number>
          </Phone>
          <Phone>
            <Text>Deficiente de fala e audição</Text>
            <Number>0800 979 7099</Number>
          </Phone>
          <Phone>
            <Text>Ouvidoria</Text>
            <Number>0800 940 7772</Number>
          </Phone>
          <Text>
            <strong>Não ligamos pra você por esses telefones</strong>. Também<br />
            não solicitamos dados pessoais, senha da conta, código<br />
            de transação por telefone. Estes números são apenas<br /> 
            para você fazer ligações para o Inter.
          </Text>
        </Contact>
      </Content>
      <Menu>
        <MenuLink to="/">Confira Nossas Vagas</MenuLink>
        <MenuLink to="/">Cotação do Dólar</MenuLink>
        <MenuLink to="/">Tarífas</MenuLink>
        <MenuLink to="/">Segurança</MenuLink>
        <MenuLink to="/">Política de Privacidade</MenuLink>
        <MenuLink to="/">Canal de Ética</MenuLink>
        <MenuLink to="/">Política de Segurança da Informação</MenuLink>
      </Menu>
      <Info>
        <Address>
          Banco Inter S. A. - Avenida Barbacena, 1219 - Santo Agostinho. CEP: 30190-924 - Belo Horizonte/MG
        </Address>
        <CNPJ>CNPJ: 00.416.968/0001-01</CNPJ>
      </Info>
    </Container>
  );
}
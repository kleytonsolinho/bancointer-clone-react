import { useMediaQuery } from 'react-responsive';

import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import NavbarMobile from '../../components/NavbarMobile';

import { Container }  from './styles';

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 1000 })

  return (
    <Container>
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <main>
        <Banner />
      </main>
    </Container>
  );
}
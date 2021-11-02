import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import Navbar from '../../components/Home/Navbar';
import NavbarMobile from '../../components/Home/NavbarMobile';
import Banner from '../../components/Home/Banner';
import Benefits from '../../components/Home/Benefits';
import Carousel from '../../components/Home/Carousel';
import Bank from '../../components/Home/Bank';
import Invest from '../../components/Home/Invest';
import Companies from '../../components/Home/Companies';
import Insurance from '../../components/Home/Insurance';
import Financing from '../../components/Home/Financing';
import Cashback from '../../components/Home/Cashback';
import Footer from '../../components/Home/Footer';
import OpenAccount from '../../components/Home/OpenAccount';

import { Main }  from './styles';

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  function handleScroll() {
    if (window.scrollY >= 150) {
      setHasScrolled(true);
      return;
    }
    setHasScrolled(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <>
      {isMobile ? <NavbarMobile hasScrolled={hasScrolled} /> : <Navbar hasScrolled={hasScrolled} />}
      <Main>
        <Banner />
        <Benefits />
        <Carousel />
        <Bank />
        <Invest />
        <Companies />
        <Insurance />
        <Financing />
        <Cashback />
      </Main>
      <OpenAccount />
      <Footer />
    </>
  );
}
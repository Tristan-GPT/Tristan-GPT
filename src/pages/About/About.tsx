import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './About.css';

function About() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen: boolean | ((prevState: boolean) => boolean)) => {
    setMenuOpen(isOpen);
  };

    return <>
    <Navbar onMenuToggle={handleMenuToggle}></Navbar>
    </>

}

export default About;

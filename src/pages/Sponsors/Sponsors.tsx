import { useState } from 'react';
import './Sponsors.css';
import Navbar from '../../components/Navbar/Navbar';

function Sponsors() {

    const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen: boolean | ((prevState: boolean) => boolean)) => {
    setMenuOpen(isOpen);
  };

    return <>
    <Navbar onMenuToggle={handleMenuToggle}></Navbar>
    </>
}

export default Sponsors;

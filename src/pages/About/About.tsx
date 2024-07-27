import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './About.css';

function About() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [menuOpen,setMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen: boolean | ((prevState: boolean) => boolean)) => {
    setMenuOpen(isOpen);
  };

    return <>
    <Navbar onMenuToggle={handleMenuToggle}></Navbar>
    <div className={`container ${menuOpen ? 'shifted' : ''}`}>

      <h1 className='title'>About Me</h1>
      <p>I started to code in 2020 by learning Javascript. I was coding Discord bots & I created many projects. <br />As time went on, I learned other programming languages ​​such as Python, HTML/CSS and the latest, Typescript. <br /> I know many frameworks like Discord.js, Express, React, Vite, etc <br /> Today, my main tools is PNPM to replace NPM, React for all my websites, Discord.js with Typescript for all my bots, <br /> Express for my APIs and MySQL and MongoDB for Databases. <br /> My IDEs is Visual Studio Code, IntelliJ IDEA & rarely Visual Studio.</p>

    </div>
    </>

}

export default About;

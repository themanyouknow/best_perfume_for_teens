import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '20px',
      top: '20px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: 0
    },
    bmItem: {
      display: 'inline-block',
      marginBottom: '10px',
      textDecoration: 'none',
      color: '#d1d1d1'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div id="outer-container">
          <Menu styles={styles} scaleRotate isOpen={isOpen} onStateChange={(state) => setIsOpen(state.isOpen)} pageWrapId={'page-wrap'} outerContainerId={"outer-container"}>
            <Link onClick={toggleMenu} id="home" className="menu-item" to="/home">Home</Link>
            <Link onClick={toggleMenu} id="about" className="menu-item" to="/about">About</Link>
            <Link onClick={toggleMenu} id="contact" className="menu-item" to="/contact">Contact</Link>
          </Menu>
          <div id="page-wrap">
            <Header />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />}/>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
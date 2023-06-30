import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 700; // Adjust the threshold value as per your requirements
      setIsScrolled(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <nav>
        <p className="logo">NBA STATS</p>
        <div className="nav-links">
          <motion.div className="link" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8, backgroundColor: 'black' }}>
            <Link>Teams</Link>
          </motion.div>
          <motion.div className="link" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8, backgroundColor: 'black' }}>
            <Link>Player</Link>
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

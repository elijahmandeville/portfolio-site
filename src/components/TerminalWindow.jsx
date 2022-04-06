import React from "react";
import "../styles/TerminalWindow.css";
import { motion } from 'framer-motion';

function TerminalWindow({ transitionProps }) {
  return (
    <motion.div 
      exit="out" 
      initial="out" 
      animate="in"
      variants={transitionProps}
      className='project-list'>
      <h1>Projects</h1>
      <a href="/" className="fa-regular fa-hand-spock fa-4x"></a>
    </motion.div>
  );
}

export default TerminalWindow;

import React, {useEffect} from "react";
import "../styles/HomePage.css";
import { motion } from 'framer-motion';

function HomePage() {
  let typedTextSpan = document.querySelector(".typed-text");
  let cursorSpan = document.querySelector(".cursor");

  const transition = { duration: .6, ease: [0.43, 0.13, 0.23, 0.96]};

  const carouselText = [
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Developer",
  ];
  const typingDelay = 140;
  const erasingDelay = 90;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;

  const type = () => {
    if (charIndex < carouselText[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent +=
        carouselText[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  };

  const erase = () => {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent = carouselText[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= carouselText.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1000);
    }
  };

  useEffect(() => {
    if (carouselText.length) {
      typedTextSpan = document.querySelector(".typed-text");
      cursorSpan = document.querySelector(".cursor");
      setTimeout(() => type(), 300);
    }
  }, []);

  return (
    <motion.div 
      exit={{ scale: 0 }} 
      initial={{ scale: 0 }} 
      animate={{ scale: "100%" }}
      transition={transition}
      className='header'>
      <motion.div exit={{ opacity: 0 }} transition={transition} className="home-info">
        <h1>Elijah Mandeville</h1>
        <h3 id='sentence' class='sentence'>
          <span className='typed-text'></span>
          <span class='cursor'></span>
        </h3>
        <div className="arrow bounce">
          <motion.a transition={transition} whileHover={{ scale: 1.1 }} href="/terminal" class="fa-solid fa-terminal fa-5x"></motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;

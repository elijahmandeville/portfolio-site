import React, {useEffect} from "react";
import "../styles/HomePage.css";

function HomePage({word}) {
  let typedTextSpan = document.querySelector(".typed-text");
  let cursorSpan = document.querySelector(".cursor");

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
    <div className='header'>
      <h1>Elijah Mandeville</h1>
      <h3 id='sentence' class='sentence'>
        <span className='typed-text'></span>
        <span class='cursor'></span>
      </h3>
    </div>
  );
}

export default HomePage;

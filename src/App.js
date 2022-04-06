import "./App.css";
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from "./components/HomePage";
import TerminalWindow from "./components/TerminalWindow";

function App() {

  const location = useLocation();

  const pageTransition = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: "-100%"
    }
  }

  return (
      <div className='App'>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={ <HomePage transitionProps={pageTransition} /> } />
            <Route path="/terminal" element={ <TerminalWindow transitionProps={pageTransition} /> } />
          </Routes>
        </AnimatePresence>
      </div>
  );
}

export default App;

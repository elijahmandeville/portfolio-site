import "./App.css";
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from "./components/HomePage";
import TerminalWindow from "./components/TerminalWindow";

function App() {
  const location = useLocation();

  return (
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={ <HomePage /> } />
            <Route exact path="/terminal" element={ <TerminalWindow /> } />
          </Routes>
        </AnimatePresence>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";
import TerminalWindow from "./components/TerminalWindow";

function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/terminal" element={ <TerminalWindow /> } />
        </Routes>
      </div>
  );
}

export default App;

import "./App.css";
import HomePage from "./components/HomePage";
import ProjectCollection from "./components/ProjectCollection";

function App() {
  const word = "Sauce";

  return (
    <div className='App'>
      <HomePage word={word} />
      <ProjectCollection />
    </div>
  );
}

export default App;

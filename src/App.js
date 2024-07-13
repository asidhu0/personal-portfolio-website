import './App.css';
import NavBar from './components/NavBar/NavBar';
import WebsitePage from './WebsitePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <WebsitePage />
      </header>
    </div>
  );
}

export default App;

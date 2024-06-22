import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'; // Make sure the path is correct
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <NavBar />
//         <HomePage />
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
          <div className="App">
            <header className="App-header">
              <NavBar />
              <HomePage />
            </header>
        </div>
      </Switch>
    </Router>
  );
}

export default App;

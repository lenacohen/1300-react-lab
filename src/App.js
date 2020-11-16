import logo from './logo.svg';
import './App.css';
import ListComp from './ListComp.jsx';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'black'}}>Who should be president?</h1> 
      <h3 style={{color: 'black'}}>Click on a candidate to vote</h3> 
      <ListComp />
    </div>
  );
}

export default App;
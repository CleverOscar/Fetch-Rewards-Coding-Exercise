import './App.css';
import {
  Container
} from 'reactstrap';

import ListComponent from './components/ListComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Fetch - Rewards - Coding - Exercise</h2>
      </header>

      <Container>
        <ListComponent/>
      </Container>
    </div>
  );
}

export default App;


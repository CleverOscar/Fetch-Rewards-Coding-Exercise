import './App.css';
import {
  Container
} from 'reactstrap';

import ListComponent from './components/ListComponent';


/*
Display all the items grouped by "listId"
Sort the results first by "listId"
then by "name"
when displaying.
Filter out any items where "name"
is blank or null. 
*/ 

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


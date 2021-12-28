
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {

  const personName = {
    first: "Bruce",
    last: "Wayne"
  }
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Clark",
      last: "Kent"
    },
    {
      first: "Bruce",
      last: "Lee"
    }
  ]

  return (
    <div className="App">
      <Greet name="Vladimir" surname="Timotijevic" message={10} isMessage={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;


import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';

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
      <Status status="loading"/> 
      
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
    </div>
  );
}

export default App;

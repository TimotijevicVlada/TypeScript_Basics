
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import ButtonEvent from './components/ButtonEvent';
import Input from './components/Input';
import LoggedIn from './components/LoggedIn';
import User from './components/User';
import Counter from './components/Counter';
import UserContext from './components/UserContext';
import DomRef from './components/DomRef';

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

      <Button handleClick={() => console.log("Button clicked!")} />
      <ButtonEvent handleClick={(e, id) => console.log("Event Button", e.target, id)}/>

      <Input value="" handleChange={(event) => console.log(event.target.value)}/>

      <LoggedIn />

      <User />

      <Counter />

      <UserContext />

      <DomRef />
    </div>
  );
}

export default App;

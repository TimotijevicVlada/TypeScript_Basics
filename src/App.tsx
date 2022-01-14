import {useState} from "react";
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
import MyUsers from "./components/MyUsers";
import ReactReduxTS from "./components/ReactReduxTS";
import Events from "./components/Events";


function App() {

  const [users, setUsers] = useState([{
    name: "Mica",
    surname: "Micic",
    age: 30,
    isMarried: false
  }, 
  {
    name: "Pera",
    surname: "Peric",
    age: 32,
    isMarried: true
  },
  {
    name: "Zika",
    surname: "Zikic",
    age: 28,
    isMarried: false
  }]);

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

  const myArray = [
    {
      name: "Vlada",
      surname: "Timotijevic",
      age: 31
    }
  ]

  console.log(myArray);

   

  return (
    <div className="App">
      <Events />

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

      <MyUsers users={users} />

      <ReactReduxTS />

    </div>
  );
}

export default App;

import Welcome from './Level1/Welcome'
import Greeting from './Level1/Greeting'
import Counter from './Level1/Counter';
import Toggle from './Level1/Toggle';
import FruitList from './Level1/FruitList';
import LoginStatus from './Level1/LoginStatus';
import NameInput from './Level1/NameInput';
import MountAlert from './Level1/MountAlert';
import UserList from './Level1/UserList';
import ToDo from './Level1/ToDo'

function App() {
  return(
    <>
    <h1 className='text-3xl font-bold'>Task 1</h1>
     <hr /><br /> <h3 className="text-2xl font-bold border-2">Hello React!</h3>
      <hr /> <br />
      <Greeting />
      <hr /><br />
      <h1 className='text-3xl font-bold'>Task 3 </h1>
    <hr /><br />  <Welcome name="Ani" className="text-2xl font-bold border-2"/>
      <hr /> <br />
      <Counter />
      <hr /><br />
      <Toggle />
      <hr /><br />
      <FruitList />
      <hr /><br />
      <LoginStatus isLoggedIn={true} /> <br />  
      <LoginStatus isLoggedIn={false} />
      <hr /><br />
      <NameInput />
      <hr /><br />
      <MountAlert />
      <hr /><br />
      <UserList />
      <br /><br /><br />
      <ToDo />
    </>
  )
}

export default App;
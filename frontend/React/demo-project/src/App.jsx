import Firstdemo from './Firstdemo'
function App() {
  return(
    <div><h1>This is first demo project</h1>
    <Firstdemo>
      </Firstdemo>
      <hr />
      <TextCom text="my name is tux" city="Pune" age={56}></TextCom>
      </div>
  )
}

function TextCom(props){
  console.log("Something", props);
  return (
    <div>
      <p>{props.text}</p>
      <p>{props.city}</p>
      <p>{props.age}</p>
    </div>
  )
}

export default App;

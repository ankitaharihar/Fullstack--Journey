// import Firstdemo from './Firstdemo'
function App() {
  // let isLoggedIn = true;
  // let isVisiable = false;
  
  return(
    <div>
      {/* {isLoggedIn ? <p>Welcome Back</p> : <p>Login in</p>}
      {isVisiable && <div>thiss is div </div>}
    {MessageChannel.length>=100} */}

      <hr />
      <TextCom text="my name is Ankita" city="Pune" age={56}></TextCom>
      <TextCom yy="I live in Pune"></TextCom>
      <TextCom xx="I love Video editing"></TextCom>
      </div>
  )
}

function TextCom({text,yy, city}){
  console.log("Something");
  return (
    <div>
       
      <p>{yy}</p>
      <p>{text}</p>
      <p>{city}</p>
    </div>
  )
}

export default App;

import Todo from "./Todo";
import Countnum from "./countnum";
function App() {
// let sports =  ["cricket", "football", "hockey","tennis"];
  let todos=[
    {
      id: 1,
      todo : "Assignment 1",
      completed:false
    },
    {
      id: 2,
      todo : "Assignment 2",
      completed:true
    },
    {
      id: 3,
      todo : "Assignment 3",
      completed:true
    },
    {
      id: 4,
      todo : "Assignment 4",
      completed:false
    }
  ]

  return(
    <div className="container">
     {todos.map((t)=>{
     
     return <Todo key={t.id} title={t.todo} completed={t.completed}></Todo>
      
    
  })}
  
    </div>
    
  );

  





}

// return(
//     <div className="container">
//         {
//             sports.map((s,i)=>{
//                 return <p key={s + i}>{s}</p>
//             })
//         }

//     </div>
// )

export default App;

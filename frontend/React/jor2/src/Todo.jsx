function Todo({title, completed}){
    return (
        <div>
            <p>{title}</p>
            <p>{completed ? "completed" : "Incompleted"}</p>
        </div>
    )
  }

  export default Todo;
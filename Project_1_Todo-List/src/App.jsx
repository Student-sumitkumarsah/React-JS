import TodoName from "./components/TodoName";
import Todoitem from "./components/Todoitem";
import Todoitems from "./components/Todoitems";
function App() {

  const Items=[{
    name:"sumit lafaroya",
    dueDate:"01/23/6252"
  },
  {
    name:"sachin kumar sah",
    dueDate:"01/23/62dbcn2"
  }
]
  return <center>
   
    <TodoName></TodoName>
    <Todoitem></Todoitem>
    <Todoitems itemsInTod={Items}></Todoitems>
   
    
  </center>
}

export default App;

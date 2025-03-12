import Todolist from "./Todolist";
const Todoitems=({itemsInTod})=>{
    return <>
    {itemsInTod.map(item=> <Todolist tododate={item.name} todoName={item.dueDate}></Todolist>)}
    </>
}
export default Todoitems;
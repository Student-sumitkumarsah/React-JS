function Todolist({todoName,tododate}){
   return <div class="content-container">
        <div class="row">
   <div class="col-6">
     {todoName}
   </div>
   <div class="col-4">
     {tododate}
   </div>
   <div class="col-2">
   <button type="button" class="btn btn-danger  kg_button">Delet</button>
   </div>
 </div>
   </div>
}
export default Todolist;
function Todolist1(){
     let Name="Buy Milk";
     let Date="04/10/2023"

    return <div class="content-container">
         <div class="row">
    <div class="col-6">
      {Name}
    </div>
    <div class="col-4">
      {Date}
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger kg_button">Delet</button>
    </div>
  </div>
    </div>
}
export default Todolist1;
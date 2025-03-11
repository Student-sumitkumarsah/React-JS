import Item from "./Item";

const Fooditem=({brand})=>{
    return(
        <ul class="list-group">
        {brand.map((item)=>(
            <Item fooditem={item}></Item>
        ))}
       
        </ul>
    );

}
export default Fooditem;
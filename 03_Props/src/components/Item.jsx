import Styles from "./Item.module.css"
const Item=(props)=>{
    return <>
    <li className= {Styles.kg_item}>{props.fooditem}</li>
    </>
}
export default Item;
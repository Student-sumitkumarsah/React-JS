import ErrorMessage from "./components/Errormessage";
import Fooditem from "./components/Fooditem";
function App() {
        let FoodItem=['Dal','veg','samosa','aalo','ghee','pakoda'];

  return (
    <>
      <h1>Healthy food</h1>
      <Fooditem brand={FoodItem}></Fooditem>
      <ErrorMessage items={FoodItem}></ErrorMessage>
    </>
  )
}

export default App;

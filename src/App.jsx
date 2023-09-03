import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

export default function App() {
 

  return (

    <div style={{ maxWidth: "1400px", margin:"0 auto"}}>

      <NavBar/>

      <ItemListContainer greeting="Productos" />

    </div>

  );
}

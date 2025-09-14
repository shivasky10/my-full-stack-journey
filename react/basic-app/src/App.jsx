
import './App.css'
import Title from './Title.jsx';
import ProductTab from './ProductTab.jsx';
import Msgbox from './msgbox.jsx';


function App() {
 
  return(
  <div>
    <Msgbox username="shiva" textcolor="red"/>
    <Msgbox username="sky" textcolor="yellow"/>
    <ProductTab/>
  </div>);
}

export default App

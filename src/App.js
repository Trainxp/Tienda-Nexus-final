
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Provider from './context/cartContext';



function App() {

    
  return (

  <Provider>
    <div className='App' >
    <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/'element={<ItemListContainer greeting= "Bienvenido a Nexus" /> } />
          <Route path='/categoria/:categoria' element = {<ItemListContainer/>} />
          <Route path='/item/:id' element = { <ItemDetailContainer/> }/>
          <Route path='/cart' element = {<Cart/>} />
        </Routes>
    
      </BrowserRouter>
    </div>

  </Provider>
  );
}

export default App;

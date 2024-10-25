import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Cotage from './pages/Cotage';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Upload from './pages/Upload';
import Update from './pages/Update';
import Edit from './pages/Edit';
import Fechfile from './pages/Fechfile';


function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Fechfile/>}/>
      </Routes>
      {/* <Navbar/> */}
      <Routes>
      <Route path='/menu'element={<Menu/>}/>
      <Route path='/cotage'element={<Cotage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/upload'element={<Upload/>}/>
      <Route path='/update'element={<Update/>}/>
      <Route path='/fechfile' element={<Fechfile/>}/>
      <Route path='/edit/:id' element={<Edit/>} loader={({params})=>
      fetch(`http://localhost:7789/allproducts/${params.id}`)} />
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

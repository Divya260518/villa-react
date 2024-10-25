import React from 'react'
import logo from '../image/logo.png'
import Footer from '../components/Footer'
import './Menu.css'
import logo1 from '../image/logo1.jpg'
import logo2 from '../image/logo2.jpg'
import Villss from '../productss/Villss'
import logo7 from '../image/logo7.jpg'
import logo8 from '../image/logo8.jpg'
import logo9 from '../image/logo9.jpg'
import { addToCart, deleteFromCart } from '../store/Cartslice'
import { useDispatch, useSelector }from'react-redux'
import Navbar from '../components/Navbar'

const Menu = () => {
    const cartProducts=useSelector((state)=>state.cart.cartItems)
    const dispatch=useDispatch();
    const addCart=(item)=>{
      dispatch(addToCart(item))
    }
    const deleteCart=(item)=>{
      dispatch(deleteFromCart(item))
    }
  return (
    <div>
      <Navbar/>
        <div class='hello'>
            <h1><b>HURRY!<br/>GET THE BEST<br/> VILLA FOR YOU</b></h1>
       
       </div>
       <div class='hello3'>
           <h1><b>VILLA AND COTAGES<br/>BE QUICK!<br/> BEST VILLA IN THE TOWN</b></h1>
       </div>
       <div class='hello2'>
       <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={logo9} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={logo8} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={logo} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       </div>
       <div class="hello1 ">
        <div class="row gy-3">
            {Villss.map((item)=>(
                <div class="col-lg-4">
                <div class="card" key={item.id}>
           <img src={item.img} class="card-img-top" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">{item.title}</h5>
             <p class="card-text">{item.des}</p>
             <p class="card-text">{item.price}</p>
           {/* <button class='btn btn-danger'>Add to cart</button> */}
           {cartProducts.find((items)=>items.id===item.id)?(
    
    <button
     class="btn btn-danger"
     onClick={()=>{
       deleteCart(item);
     }}
     >
       Remove From Cart
     </button>
     ):(
       <button 
       class="btn btn-danger"
       onClick={()=>{
         addCart(item);
       }}
     >
       Add To Cart
     </button>
     )}
           </div>
           </div>
         </div>
            ))}
           
</div>
</div>
       
       <div>
       
       </div>
       <Footer/>
    </div>

  )
}

export default Menu
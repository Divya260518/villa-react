import React from 'react'
import Cotages from '../productss/Cotages'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../store/Cartslice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cotage = () => {
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
         <div class="hello2">
        <div class="row gy-3">
            {Cotages.map((item)=>(
                <div class="col-lg-4">
                <div class="card" key={item.id}>
           <img src={item.img} class="card-img-top" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">{item.title}</h5>
             <p class="card-text">{item.des}</p>
             <p class="card-text">${item.price}</p>
             {/* <a href="#" class="btn btn-danger">add to cart</a> */}
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
<Footer/>
    </div>
  )
}

export default Cotage
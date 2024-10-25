import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Edit = () => {
    const{id}=useParams();
  const[productData,setproductData]=useState({
    name:"",
    des:"",
    title:"",
    food:"",
    img:"",
    price:"",
    quantity:"",
  });
   
  useEffect(()=>{
    fetch(`http://localhost:7789/fooding/${id}`)
    .then((res)=>res.json())
    .then((data)=>setproductData(data));
  });
  const handleUpdate=(event)=>{
    event.preventDefault();
    const form=event.target;
    const img=form.img.value;
    const des=form.des.value;
    const price=form.price.value;
    const food=form.food.value;
    const title=form.title.value;
    

    const productObj={img,des,price,food,title};
    console.log(productObj);
    fetch(`http://localhost:7789/allproducts/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(productObj),
    })
    .then((res)=>res.json())
    .then((Data)=>{
    //   toast.success("Product updated successfully");
      window.location.href ='/update';
    });
  }

  return (
    <div>
      <div class="card update6">
    <div class="card-body update5">
<form onSubmit={handleUpdate}>
       <h2>EDIT</h2>
       <div class="update0">
           <label value="title"><b>TITLE</b></label>
           <input type="text" name="title" defaultValue= {productData.title} className='ms-3'/>
       </div>
       <div class="update1">
           <label value="img"><b>IMAGE</b></label>
           <input type='img' name="img" defaultValue={productData.img} className='ms-3'/>
           </div>
           <div class="update2">
           <label value="food"><b>FOOD</b></label>
           <input type='text'name="food" defaultValue={productData.food}className='ms-3'/>
           </div>
           <div class="update3">
           <label value="des"><b>DES</b></label>
           <input type='text' name="des" defaultValue={productData.des}className='ms-3'/>
           </div>
           <div class="update4">
           <label value="price"><b>PRICE</b></label>
           <input type='numbers'name="price" defaultValue={productData.price}className='ms-3'/>
       </div>
       <section className='update9'>
       
       <div class="update7 ms-3">
           <button type="submit" class="btn btn-primary">UPDATE</button>
           
       </div>
    </section>
   </form>
   </div>
   </div>
    </div>
  )
}

export default Edit

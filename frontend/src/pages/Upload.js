import { Toast } from 'bootstrap';
import React from 'react'

const Upload = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img= form.img.value;
        const price=form.price.value;
        const des=form.des.value;
        
        const quantity = 1;

        if(title==="" ||img==="" || price==="" || des==="" ||  quantity==="")
            {
              //  toast.warn("fill the required fields") 
            }
        
            const foodObj = {title,img,price,des,quantity};
            console.log(foodObj);

            fetch('http://localhost:7789/upload',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(foodObj)
            }).then((res)=>res.json())
            .then((data)=> {
                // toast.success("data added successfully");
                form.reset();
                window.location.href = '/update';
            })
}    

  return (
    <div>
    
      <form onSubmit={handleSubmit} >
        <label value='img'>IMAGE</label>
        <input type='text' name='img' id='img'/>
        <label value='title'>TITLE</label>
        <input type='text' name='title' id='title'/>
        <label value='des'>DES</label>
        <input type='text'name='des' id='des'/>
        <label value='price'>price</label>
        <input type='number' name='price' id='price'/>
        <button>update</button>
      </form>
    </div>
  )
}

export default Upload

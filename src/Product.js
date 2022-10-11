import React from "react";
const Product=({id,image,company,price,description,name,removeProduct})=>{
    return(
        <div className="product">
           <img src={image} alt={name}/>
           <div className="content">
            <div className="flex-con">
            <h4 className="head">Product Name: {name}</h4>
           <h4 className="price"> ₹ {price}</h4>
            </div>
           
           <h4 className="hea">Company Name: {company}</h4>
          
           <p>{description}</p>
           </div>
           <button onClick={()=>removeProduct(id)}>Not Interested</button>
           <br></br>
        </div>
      
    )
}
export default Product;
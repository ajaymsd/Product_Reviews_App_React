import React from "react";
import Product from "./Product";
const Products=({products,removeProduct})=>{
    return(
        <>
      <div>
        <h2>OUR PRODUCTS</h2>
          
      </div>
      <div className="product-list">
    {products.map((product)=>{
        return(
            <div>
            <Product key={product.id} {...product} removeProduct={removeProduct}/>
            <br></br>
            <br></br>
            </div>
        )
    })}
       
      </div>
      </>
    )
}
export default Products;
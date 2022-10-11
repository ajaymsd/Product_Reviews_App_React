import Loading from './Loading';
import Products from './Products';
import './App.css';
import React from 'react';

const url="https://course-api.com/react-store-products";
function App() {
  const [loading,setLoading]=React.useState(true);
  const [product,setProducts]=React.useState([]);
  const removeProduct=(id)=>{
    const newProduct=product.filter((product)=>product.id !== id);
    setProducts(newProduct)
  }
  const fetchData=async()=>{
    setLoading(true);
    try{
    const response=await fetch(url);
    const product=await response.json();
    console.log(product);
    setProducts(product);
   
    setLoading(false);
    }catch(error){
       setLoading(false);

    }
  };
  React.useEffect(()=>{
    fetchData();
  },[]);

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  return ( 
   <Products products={product} removeProduct={removeProduct}/>
  );
}

export default App;

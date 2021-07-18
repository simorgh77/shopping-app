import { useState,useEffect } from 'react';
import './App.css';
import ProductCart  from './components/ProductCart/ProductCart';
import ProductFilter from './components/ProductCart/ProductFilter/ProductFilter';
import Header from './components/Header/Header';
import Data from "./product_data/Data"
import { react } from '@babel/types';
import BascketCart from './components/BascketCart/BascketCart';

function App() {
  const [BascketData,setBascketData]=useState([])
  const [staticData,setstaticData]=useState(Data)
  const [filter,setfilter]=useState({
    price:null,
    size:null
  })
  
const RemoveBascketHandler=(id)=>{
  debugger
  console.log(id);
  setBascketData(BascketData.filter((item=>item.id != id)))
}
  useEffect(() => {


  if(filter.size==="0" || filter.size===null){
    setstaticData(Data)
  }
  else{
    console.log(staticData);
   setstaticData(Data.filter(item=>item.size==filter.size))
  }
  }, [filter.size])
  

  useEffect(async() => {
  
    if(filter.price=="1"){

      setstaticData(staticData.sort((a,b)=>b.price-a.price))
    }
   else if(filter.price=="-1"){

     
      setstaticData(staticData.sort((a,b)=>a.price-b.price))
    }
  }, [filter.price])
  
  return (
    <>

     <Header />
     <div className="nav">
<ProductFilter filter={filter} setfilter={setfilter}/> 
</div>
    <main>
    <div className="products">
      </div>
      <div className="main">

        {staticData.map((item,index)=>(
      <div className={"products_information"+index} key={index}>
       
<ProductCart item={item} title={item.title} 
img={item.img} price={item.price} 
BascketData={BascketData} setBascketData={setBascketData}
 ></ProductCart>
      </div>
        ))
        }

      </div>
      <div className="sidebar">

    {
     BascketData.map((item,index)=>(
<BascketCart title={item.title} 
img={item.img} price={item.price} number={item.Number}
 onclick={()=>RemoveBascketHandler(item.id)} />

     ))
    }
      </div>
    </main>

    </>
  );
}

export default App;

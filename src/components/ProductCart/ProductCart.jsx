import React from 'react'
import "./style.css"
export default function ProductCart({item,title,img,price,BascketData,setBascketData}) {
  
    const AddToBascket=()=>{

    if( BascketData.find(element=>(element.id==item.id))){
    item.Number++
    setBascketData([...BascketData])
    }
    else{
     setBascketData([...BascketData,item])
    }
      
    }

    return (

        <div >
      
          <img src={img} alt="1" />
          <p>{title}</p>
    
          <div className="buy">
            <span>${price}</span>
            <span><button onClick={AddToBascket}>Add To Cart</button></span>
          </div>
        </div>
        
    )
}

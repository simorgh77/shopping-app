import React from 'react'

export default function BascketCart( {title,img,price,number,onclick} ) {
    return (
        
            <>
           
        <div className="bascketItem">
      <img src={img}/>
      
      <div>{title}</div>
      <div className="info">
      <div>{price*(number)}$</div>
      
      <div><button onClick={onclick}>delete</button></div>
      </div>
      </div>
      </>
      
    )
}

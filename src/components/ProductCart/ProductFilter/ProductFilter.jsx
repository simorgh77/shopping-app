import React from 'react'

export default function ProductFilter({filter,setfilter}) {

 const changehandler=(e)=>{

   setfilter({...filter,[e.target.name]:e.target.value})
 }
    return (
      <>
               <span>
        6 Products
      </span>


        <div className="order_option">
        <label htmlFor="Order">
        Price: {" "}
        </label>
<select onChange={changehandler} name="price" id="Order">
  <option value="0">-</option>
  <option value="1">Lowest</option>
  <option value="-1">Highest</option>
</select>
</div>

<div className="Flter_option">
<label htmlFor="Filter">Size: {" "}</label>
<select onChange={changehandler} name="size" id="Filter">
  <option value="0">All</option>
  <option value="XS">XS</option>
  <option value="SM">SM</option>
  <option value="M">M</option>
  <option value="L">L</option>
  <option value="XL">XL</option>
  <option value="XXL">XXL</option>
</select>
</div>

<span>Cart is Empty</span>
        </>
    )
}

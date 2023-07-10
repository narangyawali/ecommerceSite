
import style from './cartItem.module.css'
import {storeProducts} from "../assets/data"

import React from 'react'

const getPrice =(id)=>{
    console.log("cart item ko ");
	
    return storeProducts[id].cost
}


function CartItem(item) {
  return (<>
    <div className={style.horizontal}>
        <div>
        <img height={75} width={75} src={`/assets/img/product-${item.details.id}.png`} alt="" />
        </div>

		<h1>{item.details.quantity}</h1>	

		<h1>{storeProducts[item.details.id].price}</h1>

        <h1>{item.details.cost}$</h1>
    </div>
  </>
  )
}

export  {CartItem}
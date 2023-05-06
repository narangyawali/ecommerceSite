import React from 'react'
import {CartItem} from "../components/CartItem"
import {ContextData} from "../context/context"
import { useContext } from 'react'
import style from "../components/cartItem.module.css"


function Cart() {

	const data = useContext(ContextData)

  return (<>

    <h1>Cart Items</h1>
  <div className={style.horizontal}>
    <h1>Img</h1>
    <h1>Quantity</h1>
    <h1>Price</h1>
    <h1>Total</h1>
  </div>
    {data.items.map(e=>{
		return(<>
			<CartItem key={e.id} details={e}/>
    </>)
    })}
		{console.log(data.items)}
    <h1 style={{float:'right',margin:"45px"}}>Total: {data.items.reduce((e,f)=>{return e+ f.cost},0)} $</h1>
  </>
  )
}

export default Cart
import React from 'react'
import {  useContext } from "react";
import styles from "./singleProduct.module.css"
import {ContextData } from "../context/context"



// const data = useContext(ContextData)
function SingleProduct(props) {

  const contextData = useContext(ContextData)

const handleClick=(e,id)=>{
	console.log(id);
  contextData.updatePresent(id)
  console.log("logging");
}


  return (
    <>
    <div className= {styles.card} onClick={e=> handleClick(e,props.item.id)} >
    <h3>{props.item.title}</h3>
    <img  className={styles.img_card} src={`src/assets/${props.item.img}`} alt="image" />
    <h3>{props.item.company}</h3>
			<h4>Price : $ {props.item.price}</h4>
   
    </div>
    </>
  )
}

export default SingleProduct
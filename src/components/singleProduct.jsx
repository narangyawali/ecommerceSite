import React from 'react'
import styles from "./singleProduct.module.css"
function SingleProduct(props) {


  return (
    <>
    <div className= {styles.card}>
    <h3>{props.item.title}</h3>
    <img  className={styles.img_card} src={`src/${props.item.img}`} alt="image" />
    <h3>{props.item.company}</h3>
			<h4>Price : $ {props.item.price}</h4>
   
    </div>
    </>
  )
}

export default SingleProduct
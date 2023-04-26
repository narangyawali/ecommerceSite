import styles from "./detail.module.css";
import { storeProducts, detailProduct } from "../assets/data";
import React from "react";
import SingleProduct from "./singleProduct";

function Details() {
  return (
    <>
    <h1>details</h1>
    <div className={styles.container} >

      {storeProducts.map((e) => {
        return (
          <>
         {console.log(e)}
        <SingleProduct  item={e}/>
          </>
        );
      })}

      <SingleProduct item={detailProduct}/>
      </div>

    </>
  );
}

export default Details;

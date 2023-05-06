import styles from "./homepage.module.css";
import { storeProducts, detailProduct } from "../assets/data";
import React from "react";
import SingleProduct from "../components/singleProduct";

function Home() {
  return (
    <>
    <h1>Home</h1>
    <div className={styles.container} >

      {storeProducts.map((e) => {
        
        return (
          <>
         {/* {console.log(e)} */}
        <SingleProduct  key={e.id} item={e}/>
          </>
        );
      })}

      {/* <SingleProduct item={detailProduct}/> */}
      </div>

    </>
  );
}

export default Home;

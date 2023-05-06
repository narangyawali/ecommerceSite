import style from "./details.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import React from "react";
import { storeProducts } from "../assets/data";


import { ContextData } from "../context/context";

function Details() {
const data = useContext(ContextData)
  const id = useContext(ContextData).present -1

  return (
    <>
      <h1>Details</h1>
      <div className="container">
        <div>
          <ul className={style.ul}>
            <Link to="/"> Go Shopping</Link>
            <Link to="/cart">Check Cart</Link>
          </ul>
        </div>
        <h1 className={style.center}>{storeProducts[id].title}</h1>
        <img className= {style} src={`src/assets/img/product-${id +1}.png`} alt="image" />
        <div>
          <h2>{storeProducts[id].price} $</h2>
        </div>
        
        <div className={style.actions}>
          <input type="button" value=" - 1" onClick={()=>{data.dispatchItems({type:"inc",})}} />
          <h3>{data.getIndividual(data.present)?.[0]}</h3>
          <input type="button" value=" + 1" onClick={()=>{data.dispatchItems({id:data.present,type:"dec"})}} />
        </div>
      </div>
    </>
  );
}

export default Details;

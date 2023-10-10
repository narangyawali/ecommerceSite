import style from "./details.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import React from "react";
import { storeProducts } from "../assets/data";


import { ContextData } from "../context/context";

function Details() {
const data = useContext(ContextData)
  const id = useContext(ContextData).present 

  return (
    <>
      <h1>Details</h1>
        <div>
          <ul className={style.ul}>
            <Link to="/"> Go Shopping</Link>
            <Link to="/cart">Check Cart</Link>
          </ul>
        </div>
      <div className={style.container}>
        <div>

        <h1 className={style.center}>{storeProducts[id].title}</h1>
        <img className= {style} src={`/assets/img/product-${id }.png`} alt="image" />
          <h2 style={{textAlign:"center",marginTop:"25px"}}>{storeProducts[id].price} $</h2>
        </div>
        <div>
        
        <div className={style.actions}>
          <input style={{marginRight:"20px"}} type="button" value=" - 1" onClick={()=>{data.dispatchItems({id:data.present,type:"dec"})}} />
          <input type="button" value=" + 1" onClick={()=>{data.dispatchItems({id:data.present,type:"inc"})}} />
        </div>
          <h3 style={{textAlign:"right",display:"block",height:"35px"}}>{data.getIndividual(data.present)?.[0]}</h3>
        <h3 style={{textAlign:"right"}}>{data.getIndividual(data.present)[1]} $</h3>
        </div>
      </div>
    </>
  );
}

export default Details;

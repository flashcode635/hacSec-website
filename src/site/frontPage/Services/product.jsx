import React from "react";
import './product.css'
export default function Product(){
    return(
        <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
            <button className="mid" onClick={products}> Products </button>
            <button className="mid" onClick={service()}> Services </button>
            <button className="mid" onClick={solution()}> Solutions </button>
        </div>
    )
}

function products() {
   return(
    <div style={{width:'100px'}}>
        hi
    </div>
   ) 
}

function service() {
   return(
    <>
    ko
    </>
   ) 
}

function solution() {
   return(
    <>
        op
    </>
   ) 
}
import React from "react";
import "./ProductPage.css";
import Product from "./ProductCard";

export default function Products(props) {
  return (
    <div className="productCard">
      <Product theme={props.theme} />
      <Product theme={props.theme} />
      <Product theme={props.theme} />
      <Product theme={props.theme} />
      <Product theme={props.theme} />
      <Product theme={props.theme} />
      <Product theme={props.theme} />
    </div>
  );
}

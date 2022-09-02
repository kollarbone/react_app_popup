import React, { useState } from "react";
import "./ProductPage.css";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import { BsChevronUp } from "react-icons/bs";

export default function Product(props) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Select one");
  return (
    <div className={props.theme === "light" ? "product" : "product__dark"}>
      <div className="product_info">
        <div className="product_img">
          <img
            alt="product_photo"
            src="https://cdn1.vectorstock.com/i/thumb-large/46/50/missing-picture-page-for-website-design-or-mobile-vector-27814650.jpg"
          />
          <div className="heart">
            <AiOutlineHeart />
          </div>
        </div>
        <div className="description">
          <div className="product_description">
            <div className="stars">
              <AiFillStar />
              <span
                className={props.theme === "light" ? "rating" : "rating__dark"}
              >
                4.7
              </span>
            </div>
            <span
              className={
                props.theme === "light" ? "product_code" : "product_code__dark"
              }
            >
              CODE:78534
            </span>
          </div>
          <span
            className={
              props.theme === "light" ? "product_name" : "product_name__dark"
            }
          >
            Product name
          </span>
        </div>
      </div>
      <div className="options">
        <span className={props.theme === "light" ? "price" : "price__dark"}>
          238.00 $
        </span>
        <div className="cart_things">
          <div
            onClick={(e) => setIsActive(!isActive)}
            className={
              props.theme === "light" ? "option_list" : "option_list__dark"
            }
          >
            <p>{selected}</p>
            {isActive === true ? <BsChevronUp /> : <BsChevronDown />}
            {isActive && (
              <DropdownMenu
                theme={props.theme}
                selected={selected}
                setSelected={setSelected}
                setIsActive={setIsActive}
              />
            )}
          </div>
          <div className="cart">
            <BsHandbag />
          </div>
        </div>
      </div>
    </div>
  );
}

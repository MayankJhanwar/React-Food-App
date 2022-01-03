import React, { useEffect, useState } from "react";
import "./Body.css";
import Food_items from "../../Items";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease_number,
  increase_number,
  load_all_items,
} from "../../Action/Action";

function Body() {
  const cartItems = useSelector((state) => state.cartItems.cart);
  const Total_food = useSelector((state) => state.FoodItems.Foods);
  console.log(Total_food);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(
    (item) => {
      var amount = 0;
      function countTotalPrice() {
        for (var i = 0; i < cartItems.length; i++) {
          console.log(typeof parseInt(cartItems[i].price));
          amount += parseInt(cartItems[i].count) * parseInt(cartItems[i].price);
        }
        console.log(amount);
        setTotalPrice(amount);
      }
      console.log(amount);
      console.log(totalPrice);
      countTotalPrice();
    },
    [cartItems, totalPrice]
  );

  useEffect(
    (item) => {
      function getFoods() {
        console.log(Food_items);
        dispatch(load_all_items(Food_items));
      }
      getFoods();
    },
    [dispatch]
  );

  function increaseItem(item) {
    dispatch(increase_number(item, 1));
  }

  function decreaseItem(item) {
    dispatch(decrease_number(item, 1));
  }

  return (
    // <div>
    <div className="body pt-4 pl-16 pr-8 mx-auto flex md:px-2 sm:block">
      <div className="food_items grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-2/3 h-auto sm:w-full">
        {Total_food.map((items, index) => (
          <div className="flex mx-4 my-4">
            <Card props={items} />
          </div>
        ))}
      </div>
      <div
        className="cart w-1/3 px-4 h-full relative pb-24 md:w-1/2 sm:w-full"
        style={{backgroundColor: "#F5F5F5", borderRadius: "10px"}}
      >
        <br></br>
        <h1 className="text-center font-bold text-lg">Your Cart</h1>
        <br></br>
        {cartItems
          ? cartItems.map((item, index) => (
              <div className="flex my-2 bg-white p-2">
                <div className="w-1/3" style={{borderRadius: "5px"}}>
                  <img
                    className="flex items-center my-auto"
                    style={{ width: "100%", height: "6rem", borderRadius: "5px"}}
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="pl-2 w-full pr-4">
                  <h1 className="text-lg font-semibold">
                    {item.name}
                  </h1>
                  <div className="flex justify-between w-full">
                    <p>Total: {item.count}</p>
                    <p>Price: ₹{item.price}</p>
                  </div>
                  <div className="flex py-2 ">
                    <button
                      className="w-8 h-8 mx-2"
                      style={{
                        backgroundColor: "Blue",
                        borderRadius: "50%",
                        color: "#FFFFFF",
                        fontWeight: 'bold'

                      }}
                      onClick={() => increaseItem(item)}
                    >
                      +
                    </button>
                    <button
                      className="w-8 h-8 mx-2"
                      style={{
                        backgroundColor: "#FF0000",
                        borderRadius: "50%",
                        color: "#FFFFFF",
                        fontWeight: 'bold'
                      }}
                      onClick={() => decreaseItem(item)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))
          : console.log("Not get")}
        <div
          className="bg-white py-2 px-2"
          style={{ display: totalPrice === 0 ? "none" : "block" }}
        >
          <p style={{fontWeight: "bold"}}>Total Price: ₹ <span style={{color: "Blue"}}>{totalPrice}</span></p>
          <p style={{fontWeight: "bold"}}>Delivery Charge: <span style={{color: "Red"}}>{totalPrice <= 100 ? 20 : "Free"}</span></p>
        </div>
        <div
          className="absolute mt-24 w-full text-center font-semibold py-2"
          style={{ bottom: "0", left: "0", backgroundColor: "#FAD02C" }}
        >
          {/* Total: ₹{" "}
          {totalPrice !== 0
            ? totalPrice <= 100
              ? totalPrice + 20
              : totalPrice
            : 0} */}
            Checkout
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Body;

// import React from 'react'

// function Body() {
//     return (
//         <div>
//             body
//         </div>
//     )
// }

// export default Body

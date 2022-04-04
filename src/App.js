import React, { useState } from "react";
import API from "./mockAPI";
import ProductList from './ProductList';
import Headers from './Headers';

import 'antd/dist/antd.css';
import {  Layout } from 'antd';



export default function App() {
  
  const [carts, setCarts] = useState(API);
  const { Header, Footer, Content } = Layout;

  const addToCart = i => {
    setCarts(prevState =>
      prevState.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            inCart: true,
            count: item.counterVal
          };
        }
        return item;
      })
    );
  };

  const increaseQuantity = i => {
    setCarts(prevCart =>
      prevCart.map((item, o) => {
        if (i === o && item.inCart) {
          if (item.count > 9) {
            return item;
          } else return { ...item, count: item.count + 1 };
        } else if (i === o) {
          if (item.counterVal > 9) {
            return item;
          } else
            return {
              ...item,
              counterVal: item.counterVal + 1
            };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = i => {
    setCarts(prevCart =>
      prevCart.map((item, o) => {
        if (i === o && item.inCart) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        } else if (i === o && item.counterVal > 1) {
          return {
            ...item,
            counterVal: item.counterVal - 1
          };
        }
        return item;
      })
    );
  };

  const removeFromCart = i => {
    setCarts(prevCart =>
      prevCart.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            count: 0,
            counterVal: 1,
            inCart: false
          };
        }
        return item;
      })
    );
  };

  const cartCountTotal = carts.reduce((acc, item) => acc + item.count, 0);
  const cartPriceTotal = carts.reduce((acc, item) => acc + item.price * item.count, 0);


  return (

    <Layout>
      <Header>
        <Headers
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          removeFromCart={removeFromCart}
          cartCountTotal={cartCountTotal}
          cartPriceTotal={cartPriceTotal}
          carts={carts} />
      </Header>
      <Content>
        <ProductList

          carts={carts}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          addToCart={addToCart} />
      </Content>
      <Footer>Footer</Footer>
    </Layout>

  );
}


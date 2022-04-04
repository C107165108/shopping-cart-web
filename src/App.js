import React, { useState, useEffect } from "react";

import ProductList from './ProductList';
import Headers from './Headers';

import './App.less';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import { db } from './firebase-config';
import { collection, getDocs } from '@firebase/firestore'


export default function App() {

  const [products, setProducts] = useState([]);

  const productsCollectionRef = collection(db, 'products');
  const { Footer, Content } = Layout;

  useEffect(() => {

    const getTravels = async () => {
      const data = await getDocs(productsCollectionRef);
      const productdata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setProducts(productdata)

    }

    getTravels();

  }, [])

  const addToCart = i => {
    setProducts(prevState =>
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
    setProducts(prevCart =>
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
    setProducts(prevCart =>
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
    setProducts(prevCart =>
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

  const cartCountTotal = products.reduce((acc, product) => acc + product.count, 0);
  const cartPriceTotal = products.reduce((acc, product) => acc + product.price * product.count, 0);


  return (

    <Layout>

      <Headers
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        removeFromCart={removeFromCart}
        cartCountTotal={cartCountTotal}
        cartPriceTotal={cartPriceTotal}
        products={products} />

      <Content style={{ backgroundColor: '#f4f3f0', display: 'flex', justifyContent: 'center' }}>
        <ProductList
          products={products}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          addToCart={addToCart} />
      </Content>

    </Layout>

  );
}


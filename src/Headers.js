import React, { useState } from "react";

import CartTotals from './CartTotals';
import CartItems from './CartItems';
import logo from './logo.png';

import 'antd/dist/antd.css';
import { Row, Drawer, Button, Col } from 'antd';

const Headers = ({ products, decreaseQuantity, increaseQuantity, removeFromCart, cartCountTotal, cartPriceTotal }) => {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => { setVisible(true); };
    const onClose = () => { setVisible(false); };

    const DrawerTitle =
        <Row>
            <Col>購物車</Col>
            <Col span={1} />
            <Button type="primary" shape="circle" size='small' > {cartCountTotal}</Button>
        </Row>

    return (
        <Row justify="space-between" align="middle" style={{ backgroundColor: '#f4f3f0', borderBottom: '1px #999999 solid' }}>
            <img src={logo} style={{ width: 200, padding: 20 }} />

            <Row onClick={showDrawer} justify="center" align="middle" style={{ height: 111, width: 200, borderLeft: '1px #999999 solid', cursor: 'pointer' }}>
                <Col style={{ fontWeight: '600' }}>購物車({cartCountTotal})</Col >
            </Row>

            <Drawer title={DrawerTitle} placement="right" onClose={onClose} visible={visible}>

                {products.map((product, i) =>
                    <CartItems
                        key={i}
                        product={product}
                        i={i}
                        decreaseQuantity={decreaseQuantity}
                        increaseQuantity={increaseQuantity}
                        removeFromCart={removeFromCart} />
                )}
                <CartTotals
                    cartCountTotal={cartCountTotal}
                    cartPriceTotal={cartPriceTotal} />

            </Drawer>
        </Row>
    );
}


export default Headers;
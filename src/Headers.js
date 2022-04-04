import React, { useState } from "react";
import CartTotals from './CartTotals';
import CartItems from './CartItems';
import 'antd/dist/antd.css';


import { Row, Col, Drawer, Button, Layout } from 'antd';




const Headers = ({ carts, decreaseQuantity, increaseQuantity, removeFromCart, cartCountTotal, cartPriceTotal }) => {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const DrawerTitle = "購物車(" + cartCountTotal + ")"
    return (
        <Row justify="end">
            <Button type="primary" onClick={showDrawer}>
                {DrawerTitle}
            </Button>
            <Drawer title={DrawerTitle} placement="right" onClose={onClose} visible={visible}>
                {carts.map((item, i) =>
                    <CartItems
                        item={item}
                        i={i}
                        decreaseQuantity={decreaseQuantity}
                        increaseQuantity={increaseQuantity}
                        removeFromCart={removeFromCart} />)}


                <CartTotals
                    cartCountTotal={cartCountTotal}
                    cartPriceTotal={cartPriceTotal} />
            </Drawer>
        </Row>
    );
}


export default Headers;
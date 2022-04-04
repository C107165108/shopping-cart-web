import React from "react";
import 'antd/dist/antd.css';
import { Card, Button, Tooltip, Row, Col } from 'antd';

const CartItems = ({ item, i, decreaseQuantity, increaseQuantity, removeFromCart }) => {
    const { size } = 'small';
    return (
        <div key={item.name}>
            {item.inCart && (
                <>
                    <Row justify='space-between'>
                        <Row justify='space-between' style={{ width: 250 }}>
                            <img style={{ width: 100, height: 100 }} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                            <Col style={{ width: 140 }}>
                                <h3> {item.name}</h3>
                                <p>
                                    $
                                    {Number.isInteger(item.count * item.price)
                                        ? item.count * item.price
                                        : `${(item.count * item.price).toFixed(2)}`}
                                </p>
                                <Row justify='space-between' style={{ width: 150 }}>
                               
                                        <Button onClick={() => decreaseQuantity(i)} size={size} >-</Button>
                           
                                    <p style={{ width: 40, textAlign: 'center' }}>{item.count}</p>
                             
                                        <Button onClick={() => increaseQuantity(i)} size={size} >+</Button>
                           
                                </Row>
                            </Col>
                        </Row>
                        <Button onClick={() => removeFromCart(i)} shape="circle" danger>x</Button>
                    </Row>
                    <hr />
                </>
            )}
        </div>
    );
}


export default CartItems;
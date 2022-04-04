import React from "react";
import 'antd/dist/antd.css';
import { Button, Row, Col } from 'antd';

const CartItems = ({ product, i, decreaseQuantity, increaseQuantity, removeFromCart }) => {
    const { size } = 'small';
    return (
        <div key={product.name}>
            {product.inCart && (
                <>
                    <Row justify='space-between'>

                        <Row justify='space-between' style={{ width: 250 }}>

                            <img style={{ width: 100, height: 100, objectFit: 'cover' }} alt="example" src={product.img} />

                            <Col style={{ width: 140 }}>

                                <h3> {product.name}</h3>
                                <p>${product.count * product.price}</p>

                                <Row justify='space-between' style={{ width: 150 }}>
                                    <Button onClick={() => decreaseQuantity(i)} size={size} >-</Button>
                                    <p style={{ width: 40, textAlign: 'center' }}>{product.count}</p>
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
import 'antd/dist/antd.css';
import { Card, Button, Input, Row, Col } from 'antd';



const ProductItem = ({ i, cart, decreaseQuantity, increaseQuantity, addToCart }) => {

    const { size } = 'small';

    return (
        <Card
            key={cart.name}
            hoverable
            style={{ width: 300, margin: 20 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <Row justify='space-between'>
                <h3>{cart.name}</h3>
                <h4>{cart.price}</h4>
            </Row>
            {!cart.inCart ? (
                <>
                    <Row justify='space-around'>
                        <Button onClick={() => decreaseQuantity(i)} size={size} >-</Button>
                        <Input value={cart.counterVal} style={{ width: 100 }} />
                        <Button onClick={() => increaseQuantity(i)} size={size} >+</Button>
                    </Row>
                    <br />
                    <Row justify='center' >
                        <Button onClick={() => addToCart(i)} type="primary" block>加入購物車</Button>
                    </Row>
                </>
            ) : (
                <Col>
                    <br />
                    <br />
                    <br />
                    <Row justify='center'>
                        <Button type="primary" disabled block>
                            已加入購物車
                        </Button>
                    </Row>
                </Col>
            )}

        </Card>
    );
}
export default ProductItem;
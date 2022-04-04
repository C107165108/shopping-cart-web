import 'antd/dist/antd.css';
import { Card, Button, Input, Row, Col } from 'antd';

const ProductItem = ({ i, product, decreaseQuantity, increaseQuantity, addToCart }) => {

    const { size } = 'small';

    return (
        <Card
            key={product.name}
            hoverable
            style={{ width: 360, margin: 20 }}
            cover={<img alt="example" src={product.img} style={{ width: '100%', height: 200, objectFit: 'cover' }} />}>

            <Row justify='space-between' align="middle">
                <h3>{product.name}</h3>
                <h2 style={{ color: '#78c22e', fontWeight: '600' }}>${product.price}</h2>
            </Row>
            {!product.inCart ? (
                <>
                    <Row justify='space-between'>
                        <Button onClick={() => decreaseQuantity(i)} size={size} >-</Button>
                        <Input value={product.counterVal} style={{ width: 200 }} />
                        <Button onClick={() => increaseQuantity(i)} size={size} >+</Button>
                    </Row>
                    <br />
                    <Row justify='center' >
                        <Button onClick={() => addToCart(i)} type="primary" size='large' block>加入購物車</Button>
                    </Row>
                </>
            ) : (
                <Col>
                    <div style={{ margin: 32 }} />
                    <br />
                    <Row justify='center'>
                        <Button type="primary" size='large' disabled block>
                            已加入購物車
                        </Button>
                    </Row>
                </Col>
            )}

        </Card>
    );
}
export default ProductItem;
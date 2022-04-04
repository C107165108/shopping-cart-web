import 'antd/dist/antd.css';
import { Row } from 'antd';

import ProductItem from './ProductItem';

const ProductList = ({ carts, decreaseQuantity, increaseQuantity, addToCart }) => (

    <Row style={{ marginTop: 40, display: 'flex',justifyContent:'center' }}>
    <Row style={{ display: 'flex', flexWrap: 'wrap' }}>

        {carts.map((cart, i) => (
            <ProductItem
                cart={cart}
                i={i}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                addToCart={addToCart} />
        ))}

    </Row>
        </Row>
);
export default ProductList;
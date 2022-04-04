import 'antd/dist/antd.css';
import { Row } from 'antd';

import ProductItem from './ProductItem';

const ProductList = ({ products, decreaseQuantity, increaseQuantity, addToCart }) => (

    <Row style={{ margin: '20px 80px 0px 90px', display: 'flex', justifyContent: 'center' }}>
        <Row style={{ display: 'flex', flexWrap: 'wrap' }}>

            {products.map((product, i) => (
                <ProductItem
                    key={i}
                    product={product}
                    i={i}
                    decreaseQuantity={decreaseQuantity}
                    increaseQuantity={increaseQuantity}
                    addToCart={addToCart} />
            ))}

        </Row>
    </Row>
);
export default ProductList;
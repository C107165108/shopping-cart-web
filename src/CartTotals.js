
import { Card, Button, Input, Row, Col } from 'antd';

const CartTotals = ({ cartCountTotal, cartPriceTotal }) =>
    cartCountTotal === 0 ? (
        <b>購物車是空的</b>
    ) : (
        <>

            <Row justify='space-between'>
                <h2>
                總金額
                </h2>
                <h2>
                    $
                    {cartPriceTotal}
                </h2>

            </Row>
        </>
    );

export default CartTotals;
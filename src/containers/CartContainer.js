import React, { Component } from 'react';
//import connect store
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as message from './../constants/Message';
import { actRemoveProductInCart, actChangeMessage, actUpdateProductInCart } from '../actions';

class CartContainer extends Component {
    render() {
        // mapStateToProps : state.cart
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        var result = <tr>
            <td className="text-danger">{message.MSG_CART_EMPTY}
            </td>
        </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={item.product.id}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                );
            });
        }

        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

//Kiểm tra dữ liệu hợp lệ
CartContainer.propTypes = {
    //Kiểm tra 'cart' phải là 'array'
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired,
}

// Kết nối với STORE
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => dispatch(actRemoveProductInCart(product)),
        onChangeMessage: (message) => dispatch(actChangeMessage(message)),
        onUpdateProductInCart: (product, quantity) => dispatch(actUpdateProductInCart(product, quantity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

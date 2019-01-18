import React, { Component } from 'react';
//import connect store
import { connect } from 'react-redux';
import Products from './../components/Products';
import ProductItem from './../components/ProductItem';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from './../actions/index';


class ProductsContainer extends Component {
    render() {
        var { products } = this.props;

        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    // showProduct
    showProducts(products) {
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    product={product}
                    key={product.id}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}
                />
            });
        }
        return result;
    }
}

//Kiểm tra dữ liệu hợp lệ
ProductsContainer.propTypes = {
    //Kiểm tra 'products' phải là 'array'
    products: PropTypes.arrayOf(
        //Kiểm tra dữ liệu của từng object trong mảng
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired
}


//Thực hiện kết nối với store tại container (thay vì tại component như trc)
const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

import * as Types from './../constants/ActionType';

// action ADD_TO_CART
export const actAddToCart = (product, quantity) => {
    return {
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
}

//action change message
export const actChangeMessage = (message) => {
    return {
        type : Types.CHANGE_MESSAGE,
        message
    }
}

//action remove product in cart
export const actRemoveProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

//action update product in cart
export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}

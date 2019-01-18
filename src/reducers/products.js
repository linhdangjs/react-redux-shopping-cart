var initialState = [
    {
        id: 1,
        name: 'iPhone X 64GB Gray',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: 'OPPO F7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/155261/oppo-f7-bac-400x460.png',
        description: 'Sản phẩm do Oppo sản xuất',
        price: 300,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Samsung Galaxy S9 (Đỏ)',
        image: 'https://cdn.tgdd.vn/Products/Images/42/165014/samsung-galaxy-s9-do-400x460.png',
        description: 'Sản phẩm do SamSung sản xuất',
        price: 450,
        inventory: 5,
        rating: 4
    },
    {
        id: 4,
        name: 'iPhone X 64GB Gray',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 5
    },
    {
        id: 5,
        name: 'OPPO F7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/155261/oppo-f7-bac-400x460.png',
        description: 'Sản phẩm do Oppo sản xuất',
        price: 300,
        inventory: 15,
        rating: 3
    },
    {
        id: 6,
        name: 'Samsung Galaxy S9 (Đỏ)',
        image: 'https://cdn.tgdd.vn/Products/Images/42/165014/samsung-galaxy-s9-do-400x460.png',
        description: 'Sản phẩm do SamSung sản xuất',
        price: 450,
        inventory: 5,
        rating: 4
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;
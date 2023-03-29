const products  = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.12,
    },            
    {
        id: 'bluejean',
        description: 'Blue Jean',
        price: 55.55,
    }
]

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    products.filter((product) => {
        return product.price > min && product.price <= max;
    })
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
}
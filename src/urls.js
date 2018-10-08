var CAFE24_BASE_URL = 'https://blackrubydev.cafe24api.com/api/v2/admin';
var BRS_BASE_URL = '';

export default {
    ORDERS: `${CAFE24_BASE_URL}/orders/`,

    ORDERS_ITEMS: `${CAFE24_BASE_URL}/orsers/{order_id}/items/`,

    PRODUCTS: `${CAFE24_BASE_URL}/products`
}
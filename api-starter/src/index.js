const { app } = require('@azure/functions');
const { ProductsDelete } = require('./functions/products-delete');
const { ProductsPost } = require('./functions/products-post');
const { ProductsPut } = require('./functions/products-put');

app.http('products-post', {
    methods: ['POST'],
    route: 'products',
    authLevel: 'anonymous',
    handler: ProductsPost
});

app.http('products-put', {
    methods: ['PUT'],
    route: 'products/{id}',
    authLevel: 'anonymous',
    handler: ProductsPut
});

app.http('products-delete', {
    methods: ['DELETE'],
    route: 'products/{id}',
    authLevel: 'anonymous',
    handler: ProductsDelete
});
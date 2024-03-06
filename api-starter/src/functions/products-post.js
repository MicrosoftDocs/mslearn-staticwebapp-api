// import data from shared/product-data
const data = require('../../shared/product-data');

async function ProductsPost(request) {
    try{
        // get the body from the request
        const body = await request.json();

        // create a new product object from the body 
        const product = { name: body.name, id: body.id, description: body.description };
        
        // call the addProduct method from the shared/product-data module 
        const newProduct = data.addProduct(product);

        return { 
            status: 201, 
            jsonBody: newProduct
        }
    } catch (error) {
        context.error(`Error: ${error.message}`);

        return { 
            status: 400, 
            jsonBody: {
                error: "Failed to add product"
            }
        };
    }
}

module.exports = { ProductsPost };


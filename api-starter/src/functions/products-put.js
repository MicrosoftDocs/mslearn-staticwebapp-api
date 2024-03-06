// import sample data from shared/product-data
const data = require('../../shared/product-data');

async function ProductsPut(request, context) {
    try {
        // get the body from the request
        const body = await request.json();

        // create a new product object from the body
        const product = { name: body.name, id: body.id, description: body.description };
        
        // call the updateProduct method from the shared/product-data module
        const updatedProduct = data.updateProduct(product);
        
        return { 
            status: 200, 
            jsonBody: updatedProduct 
        };
    } catch (error) {
        context.error(`Error: ${error.message}`);

        return { 
            status: 400, 
            jsonBody: {
                error: "Failed to update product"
            } 
        };
    }
}

module.exports = { ProductsPut };
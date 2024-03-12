// import sample data from shared/product-data
const data = require('../../shared/product-data');

async function ProductsDelete(request, context) {
    try {
        // get the id from the request parameters and convert it to an integer
        const id = parseInt(request.params.id, 10);

        // call the deleteProduct method from the shared/product-data module
        const deleted = data.deleteProduct(id);

        if (deleted) {
            return { 
                status: 204 
            };
        }
    } catch (error) {
        context.error(`Error: ${error.message}`);
        
        return { 
            status: 400, 
            jsonBody: { 
                error: "Failed to delete product" 
            }
        };
    }
}

module.exports = { ProductsDelete };
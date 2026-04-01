// ya logic hai, jo product.js me use karna hai, to usko export karna hai, taki order.js me use kar sake    

// Contrller is a function that contains the logic for handling requests and responses for a specific route or resource. It acts as an intermediary between the routes and the data models, processing incoming requests, performing necessary operations (like database interactions), and sending appropriate responses back to the client.
exports.CreateProduct = (req, res) => {
  res.send("All Product Cretedd by Routerr.....");
};

exports.getProductById = (req, res) => {
  res.send(`Product with ID: ${req.params.id}`);
};

exports.updateProduct = (req, res   ) => {
  res.send(`Upadte Product id:  ${req.params.id}`);
};

exports.deleteProduct = (req, res) => {
    res.send(`Product Id ${req.params.id} deleted..`);
} 

exports.searchProduct = (req, res) => {
    const { name, price } = req.query; 
    res.send(`Search Product: ${name}, Price: ${price}`);
}
exports.getAllProducts = (req, res) => {
    res.send("All Products...");
}   
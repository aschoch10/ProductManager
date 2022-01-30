const Product = require ("../controllers/product.controller")

module.exports = (app) => {
    //these routes should be SIMILAR but different from front end browser routes, using /api/ is convention
    app.get('/api/products', Product.findAll);
    app.post("/api/products", Product.createNewProduct);
    app.get("/api/products/:id", Product.findOneProduct);
    app.put("/api/products/:id", Product.updateProduct);
    app.delete("/api/products/:id", Product.deleteProduct);
}

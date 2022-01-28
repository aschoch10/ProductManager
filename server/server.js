const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const app = express();
const port = 2222;
const DB = "products_db"

app.use(cors(), express.json(), express.urlencoded({extended: true}));

require("./config/mongoose.config")(DB)

require("./routes/routes.products")(app);


app.get("/api/hello", (req, res) =>{
    res.json({message: "Hello full stack"})
})


app.listen( port, () => console.log("listening on port", port));

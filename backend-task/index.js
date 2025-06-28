const express = require("express");
const {config} = require("dotenv");
const connectDB = require("./configs/db");
const cors = require("cors");
const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");
config();


const app = express();
app.use(express.json());
const PORT = process.env.PORT || 9080
const DB_URL = process.env.DB_URL

app.use(cors());


app.get('/', (req, res) => {
    res.send("This is home route.")
})

app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes )
app.listen(PORT, () => {
    connectDB(DB_URL);
    console.log(`Server is running on http://localhost:${PORT}`);
})
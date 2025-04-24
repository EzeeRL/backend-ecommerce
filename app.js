const express = require("express");
const cors = require('cors');
const app = express();
const productsRoutes = require("./routes/zapatillasRoutes");
const camperasRoutes = require("./routes/camperasRoutes");

app.use(cors("*"));
app.use(express.json());
app.use("/Zapatillas", productsRoutes);
app.use("/Camperas", camperasRoutes);

module.exports = app;

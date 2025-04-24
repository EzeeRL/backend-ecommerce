const express = require("express");
const app = express();
const productsRoutes = require("./routes/zapatillasRoutes");
const camperasRoutes = require("./routes/camperasRoutes");

app.use(express.json());
app.use("/Zapatillas", productsRoutes);
app.use("/Camperas", camperasRoutes);

module.exports = app;

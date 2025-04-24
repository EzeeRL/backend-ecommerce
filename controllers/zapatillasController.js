const Product = require("../models/zapatillasModel");

exports.getAllProducts = (req, res) => {
  res.json(Product.getAll());
};

exports.getProductById = (req, res) => {
  const product = Product.getById(parseInt(req.params.id));
  if (product) res.json(product);
  else res.status(404).json({ message: "Producto no encontrado" });
};

exports.createProduct = (req, res) => {
  const newProduct = Product.create(req.body);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const updated = Product.update(parseInt(req.params.id), req.body);
  if (updated) res.json(updated);
  else res.status(404).json({ message: "Producto no encontrado" });
};

exports.deleteProduct = (req, res) => {
  const deleted = Product.delete(parseInt(req.params.id));
  if (deleted) res.json(deleted);
  else res.status(404).json({ message: "Producto no encontrado" });
};

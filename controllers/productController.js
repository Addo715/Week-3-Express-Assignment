// controllers/productController.js
export const getAllProducts = (req, res) => {
  res.json({ message: "Fetched all products!" });
};

export const addProduct = (req, res) => {
  res.json({ message: "Product added successfully!" });
};

import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true } //createdAt, updatedAt
);

const Product = mongoose.model("Product", productSchema); //name "Product" must be singular and capitalize first letter bc mongoose will handle on its own to be pural

export default Product;

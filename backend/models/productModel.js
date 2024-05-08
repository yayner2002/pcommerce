import { sequelize } from "../db/config.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define("Products", {
  name: DataTypes.STRING,
  image: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  brand: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  price: DataTypes.INTEGER,
  countInStock: DataTypes.INTEGER,
  rating: DataTypes.FLOAT,
  numReviews: DataTypes.INTEGER,
});

Product.sync()
  .then(() => console.log("Table and Model Synched."))
  .catch((err) => console.log(err));

export default Product;

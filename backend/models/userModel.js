import { sequelize } from "../db/config.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User", {
  username: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    defaultValue: "123",
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
  },
});

User.sync()
  .then(() => console.log("Table and Model Synched."))
  .catch((err) => console.log(err));

export default User;

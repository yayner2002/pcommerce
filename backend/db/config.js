import { Sequelize } from "sequelize";

const sequelize = new Sequelize("practicalcommerce", "root", "", {
  dialect: "mysql",
  host: "localhost",
  port: "3306",
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connected Successfully.");
  } catch (error) {
    console.log(error);
  }
};

export { sequelize, connectDB };

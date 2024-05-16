import Sequelize from "sequelize";

const DATABASE_NAME = "my_new";
const DATABASE_USER = "root";
const DATABASE_PASSWORD = "";

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD,{
    host: "localhost",
    dialect: "mysql"
});

export default sequelize;

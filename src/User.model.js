import sequelize from "./db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export { sequelize, User };
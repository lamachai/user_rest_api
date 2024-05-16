import express from "express";
import bodyParser from "body-parser";
import { sequelize } from "./User.model.js";
import cors from "cors";
import router from "./route.js";

const app = express();

//configs
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(router);

//conection
(()=>{
    console.log(sequelize)
    sequelize.sync({alter: true}).then(()=>{
        console.log("Models has been created successfully. ");
    }).catch((error)=>{
        console.error("Error creating models. ", error);
    })
})();

export default app;
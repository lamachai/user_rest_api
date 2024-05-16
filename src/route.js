import { Router } from "express";
import { defaultCors, validateFields } from "./middlewares.js";
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from "./userController.js";
import cors from "cors";

const router = Router();

router.get("/users", cors(defaultCors), getAllUsers);

router.get("/users/:id", cors(defaultCors), getUserById);

router.post("/create", validateFields, createUser );

router.put("/update/:id", validateFields, updateUser);

router.delete("/delete/:id", cors(defaultCors), deleteUser)
export default router 
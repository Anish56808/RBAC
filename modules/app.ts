import express, { Application } from "express";
import bodyParser from "body-parser";
// import cors from "cors";

import { sequelize } from "../db_config/db";  // <-- correct

// Import routes
import authRoutes from "./auth_module/auth.route";
import userRoutes from "./user_module/user.routes";
import roleRoutes from "./role_module/role.route";
import permissionRoutes from "./permission_module/permission.route";
import postRoutes from "./post_module/post.route";

// Import middlewares
import { errorHandler } from "../middlewares/error.middleware";
import { responseHandler } from "../middlewares/response.middleware";
import { validateRequest } from "../middlewares/validateRequest.middleware";

const app: Application = express();

// Middlewares
// app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(responseHandler);
app.use(validateRequest);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/permissions", permissionRoutes);
app.use("/api/posts", postRoutes);

// Error handler
app.use(errorHandler);

export default app;

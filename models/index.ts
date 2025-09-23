import { Sequelize } from "sequelize-typescript";

// Import all models
import { User } from "./user";
import { Role } from "./role";
import { Permission } from "./premission";
import { Post } from "./post.model";
import { RolePermission } from "./role-premission";
import { UserPermission } from "./user-premission";

// DB credentials
const DB_NAME = process.env.DB_NAME || "rbac";
const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "postgres";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = Number(process.env.DB_PORT) || 5432;

// Initialize Sequelize
export const sequelize = new Sequelize({
  database: DB_NAME,
  dialect: "postgres",
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  models: [User, Role, Permission, Post, RolePermission, UserPermission],
  logging: console.log,
  define: {
    freezeTableName: true, // singular table names
    timestamps: true,      // adds createdAt and updatedAt
  },
});

// Export models individually if needed
export { User, Role, Permission, Post, RolePermission, UserPermission };

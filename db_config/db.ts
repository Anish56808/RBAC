// src/config/database.config.ts
import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";
import { Role } from "../models/role";
import { Permission } from "../models/permission";
import { Post } from "../models/post.model";
import { RolePermission } from "../models/role-premission";
import { UserPermission } from "../models/user-premission";

// DB credentials from env or defaults
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
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
  models: [User, Role, Permission, Post, RolePermission, UserPermission], // Add all models here
  logging: console.log, // disable in production if needed
  define: {
    freezeTableName: true, // Use singular table names
    timestamps: true,      // Add createdAt and updatedAt
  },
});

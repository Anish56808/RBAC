import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../utils/apiResponse";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error("Error:", err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const errors = err.errors || [];

  return ApiResponse.error(res, message, errors, statusCode);
}

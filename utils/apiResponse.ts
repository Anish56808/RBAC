import { Response } from "express";

export class ApiResponse {
  // Success response
  static success(res: Response, data: any = null, message = "Success", statusCode = 200) {
    return res.status(statusCode).json({
      status: "success",
      message,
      data,
    });
  }

  // Error response
  static error(res: Response, message = "Something went wrong", statusCode = 500, data: any = null) {
    return res.status(statusCode).json({
      status: "error",
      message,
      data,
    });
  }

  // Not Found response
  static notFound(res: Response, message = "Resource not found") {
    return res.status(404).json({
      status: "error",
      message,
      data: null,
    });
  }

  // Unauthorized
  static unauthorized(res: Response, message = "Unauthorized") {
    return res.status(401).json({
      status: "error",
      message,
      data: null,
    });
  }

  // Forbidden
  static forbidden(res: Response, message = "Forbidden") {
    return res.status(403).json({
      status: "error",
      message,
      data: null,
    });
  }
}

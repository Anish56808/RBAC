import { Request, Response, NextFunction } from "express";

export const responseHandler = (req: Request, res: Response, next: NextFunction) => {
  res.success = (data: any, message = "Success", status : number = 200) => {
    return res.status(status).json({
      success: true,
      message,
      data,
    });
  };

  res.fail = (message?: string, statusCode?: number, errors?: any) => {
  return res.status(statusCode || 500).json({
    success: false,
    message,
    errors,
  });
};
  next();
};

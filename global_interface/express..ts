import { User } from "../models/user";

declare global {
  namespace Express {
    interface Request {
      user?: User; // add user property
    }
    interface Response {
  success: (data: any, message?: string, statusCode?: number) => void;
  fail: (message?: string, statusCode?: number, errors?: any) => void;
}
}
}

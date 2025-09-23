import { Request, Response, NextFunction } from "express";
import { PostService } from "./post.service";

export class PostController {
  static async createPost(req: Request, res: Response, next: NextFunction) {
    try {
      const post = await PostService.createPost(req.user!.id, req.body);
      res.success(post, "Post created successfully");
    } catch (err) {
      next(err);
    }
  }

  static async deletePost(req: Request, res: Response, next: NextFunction) {
    try {
      const deleted = await PostService.deletePost(req.params.id, req.user!.id);
      res.success(deleted, "Post deleted successfully");
    } catch (err) {
      next(err);
    }
  }
}

import { Router } from "express";
import { PostController } from "./post.controller";
import { authorize } from "../../middlewares/authorise.middleware";
import { validatePost } from "./post.validation";

const router = Router();

router.post("/", authorize("post.create"), validatePost, PostController.createPost);
router.delete("/:id", authorize("post.delete"), PostController.deletePost);

export default router;

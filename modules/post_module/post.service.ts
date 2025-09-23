import { Post } from "../../models/post.model";

export class PostService {
  static async createPost(userId: string, data: { title: string; content: string }) {
    return Post.create({ ...data, userId });
  }

  static async deletePost(postId: string, userId: string) {
    const post = await Post.findOne({ where: { id: postId, authorId: userId } });
    if (!post) throw new Error("Post not found or unauthorized");
    await post.destroy();
    return post;
  }
}

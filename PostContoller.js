import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body);
            return res.json(post)
        } catch (e) {
            res.status(500).json('Something went wrong')
        }
    }

    async getAll(req, res) {
        try {
            const posts = PostService.getAll()
            return res.json(posts)
        } catch (e) {
            res.status(500).json('Something went wrong')
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json('Something went wrong')
        }
    }

    async update(req, res) {
        try {
            const post = await PostService.update(req.body)
            return res.json(post)
        } catch (e) {
            res.status(500).json('Something went wrong')
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json('Something went wrong')
        }
    }

}

export default new PostController()
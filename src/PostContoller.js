const PostService = require('PostService')
const service = new PostService()

export default class PostController {
    async create(req, res) {
        try {
            const post = await service.create(req.body);
            return res.json(post)
        } catch (e) {
            res.status(500).json('Something went wrong')
        }
    }

    async getAll(req, res) {
        try {
            const posts = service.getAll()
            return res.json(posts)
        } catch (e) {
            res.status(500).json('Something went wrong')
        }
    }

    async getOne(req, res) {
        try {
            const post = await service.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json('Something went wrong')
        }
    }

    async update(req, res) {
        try {
            const post = await service.update(req.body)
            return res.json(post)
        } catch (e) {
            res.status(500).json('Something went wrong')
        }
    }

    async delete(req, res) {
        try {
            const post = await service.delete(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json('Something went wrong')
        }
    }
}

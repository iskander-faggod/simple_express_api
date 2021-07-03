const PostController = require('PostContoller')
const router = Router()

const {Router} = require('express')
const controller = new PostController()

router.post('/posts',  controller.create)

router.get('/posts', controller.getAll)

router.get('/posts:id', controller.getOne)

router.delete('/posts/:id', controller.delete)

router.put('/posts', controller.update)

module.exports = router
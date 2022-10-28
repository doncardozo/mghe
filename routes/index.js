import express from 'express'
import { 
    getPosts,
    getPostById,
    createPost,
    updatePost
} from '../controllers/Post.js'

const router = express.Router()

router.get("/", (req, res, next) => {
    res.json({"msg":"Hola, bienvenido!"})
})

router.get("/posts", getPosts)
router.get("/posts/:id", getPostById)
router.post("/posts", createPost)
router.put("/posts/:id", updatePost)

export default router
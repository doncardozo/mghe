import Post from '../models/posts.js'

export const getPosts = async (req, res) => {
    try {
        const post = await Post.findAll()
        res.send(post)
    } catch (err) {
        console.error(err)
    }
}

export const getPostById = async (req, res) => {
    try {

        const post = await Post.findOne({
            where: {
                id: req.params.id
            }
        })

        res.json(post)

    } catch (err) {
        console.error(err)
    }
}

export const createPost = async (req, res) => {
    try {
        await Post.create(req.body)
        res.json({"message": "Post created"})
    } catch (err) {
        console.error(err)
    }
}

export const updatePost = async (req, res) => {
    try {

        await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        res.json({"message": "Post updated"})

    } catch (err) {
        console.error(err)
    }
}
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createPost = async (req, res) => {
  try {
    const { slug, title, body, authorId } = req.body;
            
    if (!slug || !title || !body || !authorId) {
      return res.status(400).json({ message: "Please provide all fields" });
    }

    const post = await prisma.post.create({
      data: {
        slug,
        title,
        body,
        authorId,
      },
    });

    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: error.message });
  }
};



exports.getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: error.message });
  }
};

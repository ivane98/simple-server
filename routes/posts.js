const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  const posts = await Post.find();

  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.json(post);
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    desc: req.body.desc,
  });

  const result = await post.save();

  res.status(201).json(result);
});

router.delete("/:id", async (req, res) => {
  const result = await Post.findByIdAndRemove(req.params.id);
  res.json(result);
});

router.patch("/:id", async (req, res) => {
  const result = await Post.updateOne(
    { _id: req.params.id },
    { $set: { title: req.body.title } }
  );
  res.json(result);
});

module.exports = router;

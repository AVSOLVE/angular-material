const express = require('express');
const { Router } = require("express");
const cookieParser = require("cookie-parser");
const User = require("./models/User");
const app = express();
app.use(express.json());
app.use(cookieParser());
const router = Router();

router.get('/getAll', async (req, res) => {
  res.status(200).json(await User.find({}));
})

router.post('/getOne', async (req, res) => {
  res.status(200).json(await User.findOne({ email: req.body.data.email }));
})

router.post('/saveOne', async (req, res) => {
  res.status(200).json(await User.create({ ...req.body.data }));
})

router.post('/deleteOne', async (req, res) => {
  res.status(200).json(await User.deleteOne({ email: req.body.data.email }));
})

router.post('/updateOne', async (req, res) => {
  res.status(200).json(await User.findOneAndUpdate({ email: req.body.data.email }), { $set: { ...req.body.data } });
})

module.exports = router;

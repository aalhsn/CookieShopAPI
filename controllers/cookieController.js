const cookies = require("../cookies");
const { Cookie } = require("../db/models");

exports.cookieCreate = async (req, res) => {
  try {
    const newCookie = await Cookie.create(req.body);
    res.status(201).json(newCookie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.cookieList = async (req, res) => {
  try {
    const cookies = await Cookie.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] }
    });
    res.json(cookies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.cookieDetail = async (req, res) => {
  try {
    const { cookieId } = req.params;
    const cookie = await Cookie.findByPk(cookieId);
    if (cookie) {
      res.json(cookie);
    } else {
      res.status(404).json({ message: "Cookie not found" });
    }
  }  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.cookieUpdate = async (req, res) => {
  const { cookieId } = req.params;
  try {
    const foundCookie = await Cookie.findByPk(cookieId);
    if (foundCookie) {
      await foundCookie.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Cookie not found" });
    }
  } catch (error) {
    res.status(404).json({ message: "Cookie not found" });
  }
};

exports.cookieDelete = async (req, res) => {
  const { cookieId } = req.params;
  try {
    const foundCookie = await Cookie.findByPk(cookieId);
    if (foundCookie){
      await foundCookie.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({message:"Cookie not found"})
    }
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};


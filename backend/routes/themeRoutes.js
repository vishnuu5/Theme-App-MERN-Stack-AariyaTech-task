const express = require("express");
const router = express.Router();
const Theme = require("../models/Theme");

router.get("/", async (req, res) => {
  try {
    const themes = await Theme.find().populate("userId");
    res.json(themes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const theme = await Theme.findById(req.params.id).populate("userId");
    if (!theme) return res.status(404).json({ error: "Theme not found" });
    res.json(theme);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, primary, accent, mode } = req.body;
    const theme = new Theme({ name, primary, accent, mode });
    await theme.save();
    res.status(201).json(theme);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const theme = await Theme.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!theme) return res.status(404).json({ error: "Theme not found" });
    res.json(theme);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const theme = await Theme.findByIdAndDelete(req.params.id);
    if (!theme) return res.status(404).json({ error: "Theme not found" });
    res.json({ message: "Theme deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

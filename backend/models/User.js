const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    preferredTheme: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Theme",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

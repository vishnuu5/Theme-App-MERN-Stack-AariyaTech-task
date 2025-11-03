const mongoose = require("mongoose");

const themeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    primary: {
      type: String,
      default: "#0070f3",
    },
    accent: {
      type: String,
      default: "#06b6d4",
    },
    mode: {
      type: String,
      enum: ["light", "dark", "system"],
      default: "system",
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Theme", themeSchema);

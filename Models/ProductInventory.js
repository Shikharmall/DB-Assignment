const mongoose = require("mongoose");

const productInventorySchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product_Inventory = mongoose.model(
  "Product_Inventory",
  productInventorySchema
);

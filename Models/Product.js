const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    SKU: {
      type: String,
      required: true,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product_Category",
      required: type,
      validate: {
        validator: async function (value) {
          const category = await mongoose
            .model("Product_Category")
            .findById(value);
          return category !== null;
        },
        message: "Invalid category ID",
      },
    },
    inventory_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product_Inventory",
      required: type,
    },
    price: {
      type: Number,
      required: true,
    },
    discount_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Discount",
      required: type,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

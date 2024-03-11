# Answer 1

The relationship between the "Product" and "Product_Category" entities is established through a foreign key association.
In the "Product" schema, the category_id field is defined as a reference to the "Product_Category" model.
This implies that each product is associated with a specific category, and the category_id field in the "Product" schema holds the ObjectId of the corresponding category in the "Product_Category" collection.

# Answer 2

To ensure that each product in the "Product" table has a valid category assigned to it, we can use Mongoose's validation features. Specifically, you can write the validate option in the schema to create a custom validator.
You can see in code validator has been used there.The code is given below-

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

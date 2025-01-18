import { Schema, model, models } from "mongoose";

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        trim: true,
      },
      image: {
        type: String,
        // validate: {
        //   validator: (url) =>
        //     /^(http|https):\/\/[^\s$.?#].[^\s]*$/.test(url),
        //   message: "Invalid URL format",
        // },
      },
      ingredients: {
        type: [String],
        required: true,
        validate: {
          validator: (arr) => arr.length > 0,
          message: "At least one ingredient is required",
        },
      },
      instructions: {
        type: String,
        required: true,
        minlength: 10,
        trim: true,
      },
      cuisine: {
        type: String,
        required: true,
        minlength: 2,
        trim: true,
      },
      calories: {
        type: Number,
        required: true,
        min: [1, "Calories must be a positive integer"],
      },
      body: {
        type: String,
        default: "",
      },
});

export default models.Recipe || model("Recipe", RecipeSchema);
import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [2, "Title must be at least 2 characters"],
  },
  body: {
    type: String,
    required: [true, "Body is required"],
    minlength: [2, "Body must be at least 2 characters"],
  },
});

export default models.Post || model("Post", PostSchema);

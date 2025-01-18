import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name must be less than 50 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [1, "Age must be a positive integer"],
      validate: {
        validator: Number.isInteger,
        message: "Age must be an integer",
      },
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["male", "female", "non-binary"],
    },
    birthDate: {
      type: Date,
      required: [true, "Birth date is required"],
      validate: {
        validator: function (value) {
          return value < new Date();
        },
        message: "Birth date must be in the past",
      },
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      minlength: [5, "Address must be at least 5 characters"],
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ["admin", "user"],
      default: "user",
    },
    university: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }

);

export default models.User || model("User", UserSchema);
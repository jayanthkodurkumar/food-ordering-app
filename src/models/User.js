const { Schema, models, model } = require("mongoose");
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      unique: true,
      validate: (pass) => {
        if (!pass?.length || pass.length < 5) {
          new Error("password length must be atleast 5 characters");
          return false;
        }
      },
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", function (user) {
  const pass = user.password;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(pass, salt);
  user.password = hash;
});

export const User = models?.User || model("User", UserSchema);

import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  imageUrl: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.models.user || mongoose.model("user", UserSchema);

export default User;

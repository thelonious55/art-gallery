const mongoose = require("mongoose");




// One a user has many posts 
// A post belongs to a User
const artSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  artist: String,
  year: String,
  photoUrl: String,
  info: String,
  // One Post has many likes, we are using embedding, because the likes will always be tied to the post, so no reason
  // to make a likes model
});

module.exports = mongoose.model("Art", artSchema);
const mongoose = require("mongoose")
const user = mongoose.Schema({
	name: {
		type: mongoose.Schema.Types.String,
	},
	email: {
		type: mongoose.Schema.Types.String,
		unique: true,
	},
	college: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "College",
	},
})
module.exports = mongoose.model("User", user)

const mongoose = require("mongoose")
const college = mongoose.Schema({
	name: {
		type: mongoose.Schema.Types.String,
	},
	trainings: {
		type: [mongoose.Schema, mongoose.Types.String],
	},
})
module.exports = mongoose.model("College", college)

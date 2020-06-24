const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema(
	{
	 name: {type: String, required: true},
	 email: {type: String, required: true},
	 password: {type: String, required: true, min:8, max:32},
	 role: {type: Number, required: true},
	},
	{
		timestamps:true
	}

)

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const db=`mongodb+srv://test:123456test@cluster0.hncbqqn.mongodb.net/FullStackTask?retryWrites=true&w=majority`

const connectDB = async () => {
	try {
		await mongoose.connect(db);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};
module.exports = connectDB;
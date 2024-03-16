const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./db/connectDB');
require('dotenv').config()


const app = express();
app.use(express.json());



// Routes
app.use('/api/users', userRoutes);

app.use("/",(req,res)=>{
    res.send("Server is running")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on port ${PORT}`);
});

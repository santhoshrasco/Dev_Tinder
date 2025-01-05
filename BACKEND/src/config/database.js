const mongoose = require('mongoose')

async function connectDB() {
    await mongoose.connect("mongodb+srv://santhoshkumar4270:QmFss_xf-cV2kfU@santhoshdb.g2vhe.mongodb.net/devTinder")
}
connectDB()


module.exports = {connectDB} 
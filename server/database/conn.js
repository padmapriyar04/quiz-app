const mongoose= require("mongoose");

async function connect(){
    await mongoose.connect("mongodb+srv://admin:admin123@cluster0.iwldacq.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database Connected")
}
module.exports = connect

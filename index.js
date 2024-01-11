const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("./routes/user")


dotenv.config();
// making contivity with server 
mongoose.connect(
    process.env.mongodb
)
.then((res)=>{
    console.log("database  connected succesfully");
})
.catch((err)=>{
    console.log(err);
})
// making contivity with mongodb//

// making rest api//
app.use(express.json());
app.use("/api/user",userRoute)


app.listen(process.env.PORT || 5000,()=>{
    console.log("The server is running");
});
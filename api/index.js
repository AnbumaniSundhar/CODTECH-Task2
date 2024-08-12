const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const CategoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL, {

    
}).then(console.log("Connected to MONGODB"))
  .catch(err=>console.log(err));



  const storage = multer.diskStorage({
    destination:(req,file,cb) => {
      cb(null,"images");
    },
    filename: (req,file,cb) => {
     //cb(null, Date.now() + path.extname(file.originalname));
     cb(null, req.body.name );
      
    },
  });

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res) => {
  try {
    res.status(200).json("file has been uploaded!...");
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", CategoryRoute);

app.listen("5000", ()=>{
    console.log("Backend is running.");
});
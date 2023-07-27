import express from "express";
import path from "path";

// if you want to send file you can use path object this method gives you current directory
const app = express();
// i am set the static file
const pathLocation = path.join(path.resolve(),"Public")
app.use(express.static(pathLocation))

app.set("view engine","ejs")
// creating routes
app.get("/", (req, res) => {
  // i am joining index.html to node --> ./node/index.html 
  res.sendFile("index");
});
app.get("/about", (req, res) => {
  res.send("this is about section");
});

// i am changing in html in dynamic form so i install ejs
app.get("/dynamic",(req,res)=>{
  res.render("index",{name:'adsule'})
})
app.listen("5000", () => {
  console.log("server is working");
});

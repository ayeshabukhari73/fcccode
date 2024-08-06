let express = require('express');
let app = express();
//#1
//console.log("Hello World");
//#2
// app.get("/",(req, res)=>{
//   res.send("Hello Express")
// })
//#4
app.use("/public", express.static(__dirname + "/public"))
//#11
app.use(bodyParser.urlencoded({extended: false}))
// **IMPORTANT: This middleware should be placed before other routes**
// #7
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
//#3
app.get("/", (req,res)=>{
  res.sendFile(__dirname + "/views/index.html")
})
// app.get("/json", (req,res)=>{
//   res.json({"message": "Hello json"})
// })
//#6
// ... (rest of the code)
//#6
app.get("/json", (req, res) => {
  if (process.env["MESSAGE_STYLE"] === "uppercase") {
    res.json({ "message": "HELLO JSON" }); // Use uppercase letters here
  } else {
    res.json({ "message": "Hello json" });
  }
});





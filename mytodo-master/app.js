require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// connnection

mongoose.connect("mongodb+srv://anjaliDB:"+process.env.PASSWORD+"@cluster0.vrccx.mongodb.net/taskmanagerDB",{useNewUrlParser:true, useUnifiedTopology:true})

//  schema
const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
});

// model
const Item = mongoose.model("Item", itemSchema);

// Routes

app.get("/", (req, res) => {
  Item.find({}, (err, foundItems) => {
    if (err) {
      console.log(err);
    } else {
      res.render("list", {
        newListItems: foundItems,
      });
    }
  });
});

app.post("/", (req, res) => {
  const listItem = req.body.newItem;

  const item1 = new Item({
    itemName: listItem,
  });

  item1.save();
  res.redirect("/");
});


// delete
app.post("/delete",(req,res)=>{
  const checkedItemId = req.body.checkbox;
  Item.deleteOne({_id:checkedItemId},(err)=>{
    if(!err){
      res.redirect("/")
    }
  })
})


app.listen(process.env.PORT || 3000, () => {
  console.log("server started on port : 3000");
});

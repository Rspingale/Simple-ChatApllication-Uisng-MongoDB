const express = require("express");
const mongoose = require('mongoose');
const figlet = require("figlet");
const path = require("path");
const chat = require('./models/chats');
var methodOverride = require('method-override');


const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.listen(port, () => {
  console.log("Hi, I am Server and I Started Listening");
});


figlet("Hello Rupesh!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

main().then((res) => {
  console.log("DB is Connected");

}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ChatAplication');
}

// let chat1=new chat({
//     from:"Rupesh",
//     to:"Sagar",
//     msg:"Hiiii Kengoo",
//     created_at:new Date()
// });

// chat1.save().then((res)=>{
//     console.log("Chat Insterted");
// }).catch((err)=>{
//     console.log(err);
// });

app.get('/', async (req, res) => {
  let chats = await chat.find();
  console.log(chats);
  res.send("working");
});

app.get('/chats', async (req, res) => {
  let chats = await chat.find();
  // console.log(chats);
  res.render("chats.ejs", { chats });
  // res.send("working");
});

app.get('/chats/new', (req, res) => {
  res.render("nwchat.ejs");
});

app.post('/chats/new', (req, res) => {
  let { from1, to1, msg1 } = req.body;
  let created_at1 = new Date();

  let chat1 = new chat({
    from: from1,
    to: to1,
    msg: msg1,
    created_at: created_at1
  })

  chat1.save().then(() => {
    res.redirect("/chats");
  })
});

app.get('/chats/:id/update', async (req, res) => {
  let { id } = req.params;
  let chatt = await chat.findById(id);
  console.log(chatt);
  res.render("updatechat", { chatt });
});

app.patch('/chats/:id/update', async (req, res) => {
  try {
    const { id } = req.params;
    const { msg } = req.body;
    const newmsg=msg;
    const updatedChat = await chat.findByIdAndUpdate(
      id,
      { $set: { msg: newmsg } },
      { runValidators: true, new: true }
    );
    
    if (!updatedChat) {
      console.log('Chat not found');
      return res.redirect('/chats');
    }
    res.redirect('/chats');
  } catch (error) {
    console.error(error);
    res.redirect('/chats');
  }
});


app.delete('/chats/:id/delete', async (req, res) => {
  try {
    const { id } = req.params;
    await chat.findByIdAndDelete(id);
    res.redirect('/chats');
  } catch (error) {
    console.error(error);
    res.redirect('/chats');
  }
});


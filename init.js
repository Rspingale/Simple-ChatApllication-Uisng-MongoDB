const mongoose = require('mongoose');
const chat = require('./models/chats');
main().then((res)=>{
    console.log("DB is Connected");
    
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ChatAplication');
}

const dataArray = [
    {
      from: "Rupesh",
      to: "Sagar",
      msg: "Hiiii Kengoo",
      created_at: new Date()
    },
    {
      from: "Alice",
      to: "Bob",
      msg: "Hello Bob!",
      created_at: new Date()
    },
    {
      from: "John",
      to: "Doe",
      msg: "Hey Doe!",
      created_at: new Date()
    },
    {
      from: "Eve",
      to: "Charlie",
      msg: "How are you?",
      created_at: new Date()
    },
    {
      from: "Sam",
      to: "Linda",
      msg: "Meeting at 3 PM",
      created_at: new Date()
    },
    {
      from: "Michael",
      to: "Jennifer",
      msg: "Good morning!",
      created_at: new Date()
    },
    {
      from: "Sophia",
      to: "Matthew",
      msg: "Just wanted to say hi!",
      created_at: new Date()
    },
    {
      from: "Alex",
      to: "Olivia",
      msg: "What's up?",
      created_at: new Date()
    },
    {
      from: "Daniel",
      to: "Emily",
      msg: "Happy Friday!",
      created_at: new Date()
    },
    {
      from: "Grace",
      to: "William",
      msg: "How was your day?",
      created_at: new Date()
    },
  ];

chat.insertMany(dataArray).then(()=>{console.log("Many Chats Inserted");});
  
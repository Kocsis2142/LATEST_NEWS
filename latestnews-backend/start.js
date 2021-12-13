require('dotenv').config()
const mongoose = require("mongoose")
const getNewsByCategory = require('./util/getNewsByCategory')
const newsCategoryList = require('./util/newsCategoryList')
const app = require('./app')
const port = 3080;

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);

const connection = mongoose.connection;
  connection.on('error', console.error.bind(console, 'connection error:'))
  connection.once('open', function () {
      setInterval(() => { 
        newsCategoryList.map(category => getNewsByCategory(category))
      }, 10800000);
  });

app.listen(port, () => {
  console.log("Server Has Started");
});
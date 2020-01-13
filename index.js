const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

let items = [" Cook food", "Clean room", "Do laundry"];

app.get('/', (req, res) => {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  var day = today.toLocaleDateString("en-US", options);

  res.render('list', {kindofday: "Thursday, August 22", newItem: items});
});

app.post('/', (req, res) => {
  item = req.body.newItem;
  items.push(item);
  res.redirect('/');
});

app.listen('3000', () => {
  console.log("Server is running on host 3000");
})
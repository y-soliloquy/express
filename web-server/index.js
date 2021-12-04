const express = require('express')
const path = require("path")
const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

// app.get('/', function (req, res) {
//   res.send('<h1>TOPページ</h1>')
//   console.log("******1")
// })

app.get('/about', function (req, res) {
  res.send('Aboutページdayoooo')
  console.log("******2")
})

app.post('/api/v1/quiz', function (req, res) {
  const answer = req.body.answer
  if (answer === "2") {
    // res.send("正解！")
    res.redirect("/correct.html");
  } else {
    // res.send("不正解！")
    res.redirect("/wrong.html");

  }
  console.log("******3")
})

app.listen(3000, function() {
  console.log('running')
})


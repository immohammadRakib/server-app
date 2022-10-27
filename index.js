const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const courses = require('./courses.json');
const app = express();
const port = 5000;


app.use(cors());

app.get('/', (req, res) => {
  res.send('Look mama !!!!!! this is my server ')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('Loking data for id', id);

    const course = courses.find(data => data.id === id ) || {};
    res.send(course)
})

app.get('/courses/:id/premium', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('Loking data for id', id);

    const course = courses.find(data => data.id === id ) || {};
    res.send(course)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
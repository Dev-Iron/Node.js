const express = require('express')
const app = express()
const port = 5001

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://2sooncheol:sooncheol@cluster0.csli7vk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  ).then(() => console.log('MongoDB connected....'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => 
  console.log(`Example app listening on port ${port}`));

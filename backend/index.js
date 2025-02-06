// node-express for the node snippet
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()
const productRouter = require('./routes/Products')
const port = 3000

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

  
app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({limit:'10mb',extended:true}))

app.use('/api/products',productRouter)

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))


// {
//     "title":"Kid's Bunk Bed",
//     "supplier": "Playful Interiors",
//     "price": "5000",
//     "imageUrl":"img",
//     "description":"dwydgceydyddtt",
//     "product_location":"india"
// }

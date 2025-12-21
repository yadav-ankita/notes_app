require('dotenv').config()

//security packages
const cors = require('cors')

//routes
const express = require('express');
const app = express();         
       
const connectDb = require('./db/connect')
const authenticationMiddleware = require('./middleware/authUser')
              
//routers
const authRoute = require('./routes/auth')
const noteRoute = require('./routes/notes')

//error Handler
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')

app.use(express.json())
app.use(cors())

//routes
app.get("/", (req, res) => {
  res.send("Your Notes App")
})
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/notes', authenticationMiddleware, noteRoute);

app.use(notFound);
app.use(errorHandlerMiddleware);
      
const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`app is listeing on port ${port}`)
    })

  } catch (error) {
    console.log("error in app.js", error)
  }
}       
start()                    
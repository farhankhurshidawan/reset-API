import express from'express'
const app = express()


// http method get,post , put, delete
app.get('/', (_req, res) => {
  res.json({message:'welcome to api home page'})
})

export default app;
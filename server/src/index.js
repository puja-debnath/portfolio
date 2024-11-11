import express from "express"
import dotenv from "dotenv"
import ConnectDB from "./DB/Db.js"
import cors from "cors"
import portfolioRoute from "./Routes/portfolio.routes.js"

dotenv.config({
    path:"./env"
})
const app = express() 
app.use(cors())
app.use(express.json())
app.use("/api/portfolio",portfolioRoute)




ConnectDB()
.then(() =>{
    app.listen(process.env.PORT || 3001 , () =>{
        console.log(`app is listening on ${process.env.PORT}`)
    })
})
.catch((error) =>{
    console.log("mongodb connection aborted", error)
})

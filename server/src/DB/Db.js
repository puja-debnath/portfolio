import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"
const ConnectDB = async() =>{
   try {
      const connectionLine = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
      console.log(`mongodb is connected. DB host: ${connectionLine.connection.host}`)
   } catch (error) {
       console.log("mongodb connected is failed ." , error)
       process.exit(1)
   }
}

export default ConnectDB 
import express, { Request, Response } from "express"
import { postRoute } from "./module/post/post.route";

const app = express();

app.use(express.json());

app.get('/', (req:Request,res:Response)=>{
    res.send("Server is ding dong")
},

app.use('/', postRoute),

)
export default app;
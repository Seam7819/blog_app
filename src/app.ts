import express, { Request, Response } from "express"
import { postRoute } from "./module/post/post.route";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app = express();
app.all('/api/auth/{*any}', toNodeHandler(auth));
app.use(express.json());

app.get('/', (req:Request,res:Response)=>{
    res.send("Server is ding dong")
},

app.use('/', postRoute),

)
export default app;
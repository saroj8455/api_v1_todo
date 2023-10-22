import express from "express";
import * as dotenv from "dotenv"
import sitemap from "express-sitemap-html"
import cors from "cors";
import * as uuid from "uuid";
import * as http_status from "http-status";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8082;

app.use(express.json())
app.use(cors())


app.get("/",(req, res, next)=>{
    res.status(http_status.OK).jsonp({
        message:"It's OK"
    })
})

app.post("/comments",(req, res, next)=>{
    const {title,description} = req.body;
    res.status(http_status.OK).jsonp({
        payload:{
            title,description,
            uuid:`${uuid.v4()}`
        }
    })
})


// Configure API DOC
sitemap.swagger("TODO APP ~ API DOCS",app);
app.listen(8082,()=>{
    console.log(`⚡ Server is running under http://localhost:${PORT}`)
})

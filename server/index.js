const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const app=express()
const questionmodel=require("./models/questionmodel")
const dburl="mongodb+srv://QuizApp:QuizApp@cluster0.gfh1ht2.mongodb.net/?retryWrites=true&w=majority"


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())



const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.connect(dburl,connectionparams).then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err)
})

app.get("/",(req,res)=>res.send("Homepage"))


app.post("/questions", async(req,res)=>{
    const {
        question,
        OptionA,
        OptionB,
        OptionC,
        OptionD,
        correctAnswerOption,

    }=req.body

    const data=new questionmodel({
        "question": question,
        "OptionA": OptionA,
        "OptionB": OptionB,
        "OptionC": OptionC,
        "OptionD": OptionD,
        "correctAnswerOption": correctAnswerOption,

    })
   
    await data.save()
    res.end("Successful")

   
})


app.get("/questions",async(req,res)=>{

   const datas = await questionmodel.aggregate([{$sample:{size:1}}])
    return res.json(datas)
})

app.listen(8080,()=>{
    console.log("server Started at port 8080");  
})
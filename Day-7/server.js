const express = require("express")
const connectToDB = require("./src/db/db")
const notemodel = require("./src/schema/note.model")
const app = express()
connectToDB()

app.use(express.json())


app.post("/notes",async (req,res)=>{

    const { title , content } = req.body

    console.log(title,content)

    await notemodel.create({
        title,content
    })


    res.status(201).json({
        message:"notes added "
    })

})

app.listen(3000,()=>{
    console.log("The Shit has begin")
})  
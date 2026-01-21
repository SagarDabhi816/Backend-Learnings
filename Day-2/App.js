const expres = require('express')


const app = expres()


app.get('/home',(req,res)=>{
    res.end("This iS Home PAge ")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
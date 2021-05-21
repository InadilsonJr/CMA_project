var express = require("express");
// const bodyParser = require('body-parser');
var app = express();
var db = require("./db")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.post("/login", (req, res, next) => {
    const userFound = db.users.filter(e=>e.username==req.body.username)
    if(userFound){
        const {username, password} = userFound[0]
        if(username=="inadilson" && password=="123456"){
            return res.json({token:"ashsajdhakldhadl"});  
        }
        return res.send({error:"user or password incorrect"})
    }else{
        res.send({error:"user or password incorrect"})
    }
});

app.post("/:tripId/expense", (req, res, next) => {
    const {tripId} = req.params
    const {expense} = req.body
    console.log(req.body)
    const tripFound = db.data.filter(e=>e.tripId==tripId)[0]
    if(tripFound){
        db.data.map(e=>{
            if (e.tripId==tripId){
                return e.expenses.push(expense)
             }
        })
        // console.log(db.data.filter(e=>e.tripId==tripId)[0])
        return res.send({success:true})
    }else{
        db.data.push({tripId,expenses:[expense]})
        console.log(db.data.filter(e=>e.tripId==tripId)[0])
        return res.send({success:true})
    }
});

app.get("/:tripId", (req, res, next) => {
    const {tripId} = req.params
    const tripFound = db.data.filter(e=>e.tripId==tripId)[0]
    if(tripFound){
        return res.json(tripFound)
    }
    return res.send({error:"Trip not found"})
});

app.get("/:tripId/summary", (req, res, next) => {
    const {tripId} = req.params
    const tripFound = db.data.filter(e=>e.tripId==tripId)[0]
    if(tripFound){
        return res.json(tripFound)
    }
    return res.send({error:"Trip not found"})
});
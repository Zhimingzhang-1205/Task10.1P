const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const experts = require("./models/experts.js")
const tasks = require("./models/tasks.js")
const cors=require("cors")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/Deakin",{useNewUrlParser: true})


app.route('/experts')
.get( (req, res)=>{
    experts.find((err, List)=>{
        if (err) {res.send(err)}
        else {res.send(List)}
    })
})
.post( (req,res)=>{
    console.log(req)
    var name=req.body.name
    var phone=req.body.phone
    var password=req.body.password
    var address=req.body.address
    var expert = new experts({
        name : name,
        phone :phone,
        password: password,
        address: address
    })
    expert.save((err) =>{
        if (err) {res.send(err)}
        else res.send ('Successfully added a new expert!')
    }
    )
})
.delete((req,res) =>{
    experts.deleteMany((err) =>{
        if (err) {res.send(err)}
        else {res.send('Successfully deleted all experts!')}
    })
})

app.route('/experts/:id')
.get((req, res)=>{
    experts.findOne({_id: req.params.id}, (err, found)=>{
        if (found) (res.send(found))
        else res.send("No Matched Expert Found!")
    })
})
.put((req,res)=>{
experts.update(
    {_id: req.params.id},
    {
        name : req.body.name,
        phone :req.body.phone,
        password: req.body.password,
        address: req.body.address
    },
    {overwrite:true}, 
    (err)=>{
        if (err) {res.send(err)}
        else {res.send('Successfully updated!')}
    }
)
})
.delete((req,res) =>{
    experts.deleteMany(
        {_id: req.params.id},
        (err) =>{
        if (err) {res.send(err)}
        else {res.send('Successfully deleted this expert!')}
    })
})
.patch((req, res)=>{
    experts.update(
        {_id: req.params.id},
        {$set: req.body},
        (err)=>{
            if (!err) {res.send('Successfully updated! ')}
            else res.send(err)
        }
    )
})

app.route('/newtask')
.post( (req,res)=>{
    console.log(req)
    var type=req.body.type
    var title=req.body.title
    var des=req.body.des
    var suburb=req.body.suburb
    var date=req.body.date
    var suggest=req.body.suggest
    var number=req.body.number
    var task = new tasks({
        type : type,
        title : title,
        des: des,
        suburb: suburb,
        date: date,
        suggest: suggest,
        number: number,
    })
    task.save((err) =>{
        if (err) {res.send(err)}
        else res.send ('Successfully added a new task!')
    }
    )
})
app.listen(process.env.PORT || 8000, ()=>{
    console.log('Server started on port 8000');
})
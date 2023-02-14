const { response } = require('express')
const express = require('express')
const app = express()
app.use(express.json())

let courses = [
    { _id:1, name:"Javascript"},
    { _id:2, name:"Python"},
    { _id:3, name:"Node.js"},
]
//GET on root
app.get('/',(request, response)=>{
    response.send("Hello from Pranav. First GET request to my web app")
})
//GET on all courses
app.get('/courses',(request, response)=>{
    response.send(courses)
})
//GET a particular course by _id
app.get('/courses/:_id',(request, response)=>{
    console.log(request.params);
    const course = courses.find((course)=> course._id === Number(request.params._id) )
    response.send(`Welcome to our course on ${course.name}`)
})
//POST to add a new course
app.post('/courses',(request, response)=>{
    const newCourse = {
        _id : courses.length+1,
        name: request.body.name,
    }
    courses.push(newCourse)
    response.send(newCourse)
})
//PUT to update existing course
app.put('/courses/:_id',(request,response)=>{
    let existingCourse = courses.find((course)=>course._id===Number(request.params._id))
    if(!existingCourse){
        response.status(404).send('Course not found')
    }
    existingCourse.name = request.body.name;
    response.send(existingCourse)
})
//DELETE to delete an existing course
app.delete('/courses/:_id',(request,response)=>{
    const courseToDelete = courses.find((course)=> course._id===Number(request.params._id))
    if(!courseToDelete) {
        response.status(404).send("Did not find the course to delete")
    }
    const index = courses.indexOf(courseToDelete)
    courses.splice(index,1)
    response.send(courseToDelete)
})


const port = process.env.port || 3000;
app.listen(port, ()=> console.log('Listening on port 3000'))
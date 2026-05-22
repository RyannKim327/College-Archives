const express = require(`express`)
const cors = require("cors")
const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

const users = [
    {
        id: 1,
        firstName: "Ryann Kim",
        lastName: "Sesgundo",
        section: "Bsit 4b",
        status: 'present'
    },
    {
        id: 2,
        firstName: "Rheign",
        lastName: "Kimmy",
        section: "Bsit 4b",
        status: 'absent'
    },
]

app.get(`/`, (req, res) => {
    const data = req.query
    res.send(`I miss you sa isa jan`)
})

app.post(`/users`, (req, res) => {
    const {id, firstName, lastName, section, status} = req.body
    const userIndex = users.findIndex(users => users.firstName === firstName && users.lastName === lastName)
    if(userIndex !== -1){
        
        console.log(`Updated attendance for ${lastName}, ${firstName} to: ${status}`)
        res.status(200).json({
            message: `Attendace for ${lastName}, ${firstName} has been updated to ${status}`
        })
    }else{
        const newUser = {
            id: users.length + 1,
            firstName, lastName,
            section, status
        }
        console.log(`New user added: ${lastName}, ${firstName} has been added with status ${status}`)
        res.status(201).json({
            message: `New student added: ${lastName}, ${firstName} has been added with status ${status}`
        })
    }
    res.send("Test")
})

app.get(`/users`, (req, res) => {
    res.status(200).json(users)
})

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})

module.exports = app
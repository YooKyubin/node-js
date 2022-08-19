const express = require('express')
const app = express()
const port = 3000
//cors 사용법 (npm 홈페이지)
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('animal_sound_api')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if (name == 'dog'){
        res.json({'sound': 'bowbow'})
    }else if (name == 'cat'){
        res.json({'sound':'mew'})
    }else if (name == 'pig'){
        res.json({'sound': 'oinkoink'})
    }else{
        res.json({'sound':"I don't know"})
        // res.send("I don't know")
    }
    console.log(name)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
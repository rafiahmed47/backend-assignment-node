const express = require('express')
const fileUpload = require('express-fileupload')
const pdfParse = require('pdf-parse')

const app = express();

app.use('/', express.static('public'))
app.use(fileUpload());

app.post('/submit', (req, res) =>{
    if(!req.files && !req.files.pdf) {
        req.statusCode(400)
        res.end()
    }

    pdfParse(req.files.pdf)
    .then(result => {
        res.send(result)
    })
})

app.listen(5000)
const PORT = 3000
const nodemailer = require("nodemailer")
const path = require('path')
const express = require('express')
const app = express()
const multer = require('multer')
const history = require('connect-history-api-fallback')


app.use(history())

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

app.use('/', express.static('./../frontend/dist'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lotostoii@gmail.com',
        pass: 'EUDaawww1'
    }
})

app.post('/api/sendEmail', upload.array('test_file'), async (req, res) => {

    console.log(req.files);

    const attachments = req.files.map(file => {
        return {
            filename: file.originalname,
            content: file.buffer
        }
    })

    const mail = {
        from: 'lotostoii@gmail.com',
        to: req.body.test_email,
        subject: "Oтправка почты",
        text: req.body.test_message,
        attachments
    }

    sender.sendMail(mail, function (error, info) {
        if (error) {
            res.status(400).json({ result: false })
        } else {
            console.log("Email sent successfully: "
                + info.response)
            res.json({ result: true })
        }
    })
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
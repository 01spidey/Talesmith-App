const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');
const bodyParser = require('body-parser');

// npm install --save cors
// npm install --save body-parser

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initiating the server to listen on PORT--4000
app.listen(
    PORT,
    () => console.log(`Server running on port ${PORT}`)
);


app.get('/', async(req, res)=>{
    res.send(
        {"message" : "Vanakkam Bruh!!"}
    )
})


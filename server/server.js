const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 8085;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:password0612@mvp-eabhr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// Database Connection

client.connect()
.then(() => {
    console.log("successfully connected to database")
})
.catch((err) => {
    console.log("error connecting to database:", err)
})


//middleware

app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());


//routes
app.get('/games/:platform', (req, res) => {
    getGames(req.params.platform, (err, results) => {
        if (err) {
            console.log("error serving the database query" + err)
            res.status(400).end();
        } else {
            res.send(results)
        }
    })
})



//database query function

const getGames = (platform, callback) => {

    const collection = client.db("MVP").collection("Games");

    collection.find({ Platform: platform }, { projection: {_id: 0}}).toArray()
    .then((games) => {
        callback(null, games)
    })
    .catch((err) => {
        console.log("error pulling games from database" + err)
    })


}
//server connection

app.listen(port, () => {
    console.log(`Connected to server on port ${port}!`);
})


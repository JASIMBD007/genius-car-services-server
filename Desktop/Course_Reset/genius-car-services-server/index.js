const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

//middleware

app.use(cors());
app.use(express.json());



// Replace the uri string with your MongoDB deployment's connection string.
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lrr7vme.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
async function run () {
    try {
        const collection = client.db("test").collection("devices");
        console.log("Genius car db connected");
    } finally {
        await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Running genius server ');
});



app.listen(port, () => {
    console.log('Listening to port', port);
})
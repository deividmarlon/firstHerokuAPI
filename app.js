const express = require ('express');

const app = express();

const PORT = process.env.PORT || 8877;

app.get('/api', (request,response) => {
    response.json({
        name: "First HEROKU API!",
    })
})

app.get('/about', (request,response) => {
    response.json({
        creator: "Deivid Márlon",
    })
})

app.get('/', (request,response) => {
    response.json({
        msg: "I'm an API Traoz!",
    })
})

app.listen(PORT, () => {
    console.log("I'm an A P I Traoz -> Port: " + PORT);
})
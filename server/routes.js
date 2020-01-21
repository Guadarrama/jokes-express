const Jokes = require('./controllers/Jokes.controller');

module.exports = app =>{

    //get all jokes
    app.get("/api/jokes", Jokes.getAll);

    //get a random joke
    //app.get("api/random_joke", Jokes.randomJoke);

    //create a joke
    app.post("/api/jokes", Jokes.create);

    //update a joke
    app.put("/api/jokes/update/:id", Jokes.updateJoke); 

    //delete a joke
    app.delete("/api/jokes/delete/:id", Jokes.deleteJoke);
}
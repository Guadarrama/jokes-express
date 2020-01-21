const Joke = require('../models/Joke.model')



class JokesController {
    //get all jokes
    getAll(req, res){
        Joke.find({})
            .then(jokes => res.json(jokes))
            .catch(err => res.json(err));
    }
    // //get a random joke
    // randomJoke(req, res){
    //     Joke.findOne({})
    //         .then(joke => res.json(joke))
    //         .catch(err => res.json(err));
    // }

    //create new joke
    create(req, res){
        let newJoke = new Joke(req.body);
        newJoke.save()
            .then(() => res.json({msg: "joke created"}))
            .catch(err => res.json(err));
    }
    //update joke with given id
    updateJoke(req, res){
        Joke.findOne({_id: req.params.id}, req.body, {new: true})
            .then(update=> res.json(update))
            .catch(err => res.json(err));
    }
    //delete joke with given id
    deleteJoke(req, res){
        Joke.remove({_id: req.params.id})
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
}

module.exports = new JokesController();
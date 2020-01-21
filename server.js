

const express = require('express'),
        port = 8000,//delcare port here - can change later
    db_name = "jokesdb" //declare db name - can change later
        app = express();

app.use(express.json());

require('./server/mongoose')(db_name);
require('./server/routes')(app);

app.listen(port, () => console.log(`listening on port ${port}`))

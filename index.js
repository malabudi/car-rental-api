import express from 'express';
import usersRoute from './routes/Users.js';
import questionsRoute from './routes/Questions.js';

const app = express();
app.use(express.json());

const PORT = 8080;

app.use('/users', usersRoute);
app.use('/questions', questionsRoute);

app.get('/', (req, res)=>{ 
    res.status(200);
    res.send("Welcome to the root of localhost:" + PORT); 
});

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send({status: 500, message: 'Something broke within the server'})
})

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port " + PORT)
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 

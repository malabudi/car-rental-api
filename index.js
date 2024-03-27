const express = require('express'); 

const app = express(); 
const PORT = 8000;

const usersRoute = require('./routes/Users');

app.use('/users', usersRoute);

app.get('/', (req, res)=>{ 
    res.status(200);
    res.send("Welcome to the root of localhost:" + PORT); 
});

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port " + PORT)
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 

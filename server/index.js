const express = require('express'); 
const app = express(); 

app.get('/500', (req, res) => {
    res.send({hi:'there you are at 500' });
}); 

const PORT = process.env.PORT || 5000; 
app.listen(PORT); 
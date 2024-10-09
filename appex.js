const express= require('express');
const app = express();
app.use(express.static('static'));
app.get('/hello', (req,res) => res.send("Hello Express"));
app.listen(3000,() => console.log("Server with expressJS is running"));
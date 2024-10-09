const express= require('express');
const app = express();
const port = process.env.PORT || 4000;
app.use(express.static('static'));
app.get('/hello', (req,res) => res.send("Hello Express"));
app.listen(port,() => console.log("Server with expressJS is running"));

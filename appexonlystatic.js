const express= require('express');
const app = express();
app.use(express.static('static'));
app.listen(5001,() => console.log("Server1 with expressJS is running"));
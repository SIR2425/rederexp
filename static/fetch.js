fetch('http://localhost:3000/hello')
    .then(response => console.log(response.status) || response) // output the status and return response
    .then(response => response.text()) // send response body to next then chain
    .then(body => {
        console.log(body);
        document.getElementById('container').innerHTML = body;
    }); // you can use response body here
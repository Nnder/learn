const html = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>IMT</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div>
    <div>Масса тела</div>
    <input type="text" value="" id="Mass">
    <div>Рост</div>
    <input type="text" value="" id="Width">
    <div>Возраст</div>
    <input type="text" value="" id="Years">
</div>

<button onclick="MassMath()">Посчитать</button>

<div id="result"></div>


<script src="main.js"></script>
</body>
</html>


`;

const http = require('http');
 
const hostname = '192.168.1.242';
const port = 3000;
 
const server = http.createServer((req, res) => {
 
 res.statusCode = 200;
 
 res.setHeader('Content-Type', 'text/html');
 res.end(html);
});
 
server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});


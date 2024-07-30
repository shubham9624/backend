const http = require('http');
const fs=require('fs');
const server = http.createServer((req, res) => {
    const data = fs.readFileSync("index.html").toString();
    res.end(data);
});
server.listen(3010,() => {
    console.log("Server is running on port 3010");  
});
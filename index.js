const http =  require('http');

const server = http.createServer((req, res) => {
    if(req.url== '/about'){
        return res.end("<h1>about page</h1>");
    }
    else if(req.url=='/home')
    {
        return res.end("<h1>home page</h1>");
    }
    res.end("<h1>page</h1>");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

import http, { Server } from 'http';

const server=http.createServer((req, res)=>{

       if(req.method === 'POST'){
        let body='';
        req.on('data',(chunks)=>{
            body+=chunks;
        });
        req.on('end',()=>{
            console.log(body);
            return res.end("data is ready from POST");
        });
       }
       else
       res.end('Other method call')
});
server.listen(4000,()=>{
console.log('listening on port');
});
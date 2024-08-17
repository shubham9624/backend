const fs=require('fs');
const read=require('readline');


/* fs.writeFileSync('./file.txt',"This is your new FIle");
fs.appendFileSync('./file.txt',"/nThis is append file");
const buffer=fs.readFileSync('./file.txt',);
console.log(buffer.toString());*/

const res=read.createInterface({
    input:process.stdin,
    output:process.stdout
});

res.question("Enter your name: ",(name)=>{
    res.question("Enter second name",(sec)=>{
        console.log(`Hello ${name} ${sec}`);
        res.close();
    })
});
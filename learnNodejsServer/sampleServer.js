var http=require('http')
var fs=require('fs')
http.createServer(server).listen(7000)

function server(req,res){
    fs.readFile('htmlserv.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
    
}
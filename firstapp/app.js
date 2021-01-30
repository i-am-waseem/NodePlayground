const http = require('http')

const server = http.createServer(function(req, res){
    res.setHeader('Content-Type','text/html')
    res.write('Welcome')
    res.end()
})

server.listen(8888)

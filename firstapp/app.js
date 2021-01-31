const http = require('http')

const server = http.createServer(function(req, res){
    const url = req.url
    res.setHeader('Content-Type','text/html')

    if(url === '/'){
        console.log('home request')
        res.write('Welcome, Home!')
        return res.end()
    }

    if(url ==='/message' && req.method === 'POST'){
        console.log('post request')
        res.statusCode = 302
        res.setHeader('location','/')
        return res.end()
    }

    res.setHeader('Content-Type','text/html')
    res.write('Default Page')
    res.end()
})

server.listen(8888)

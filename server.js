var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs')
    port = process.argv[2] || 3000

var server = http.createServer(function(request, response) {

  var uri = url.parse(request.url).pathname,
    filename = path.join(process.cwd(), uri)

  console.log('Request for %s', uri)
  var fileStats = fs.stat(filename, function(error, fileStats){
    if (error || !fileStats.isFile()) {
      if (error) console.error(error)
      response.writeHead(404, {'Content-Type': 'text/plain'})
      response.write('404 Not Found\n')
      response.end()
      return
    }
    console.log('Serving %s', filename)
    fs.readFile(filename, 'binary', function(error, file) {
      if(error) {
        response.writeHead(500, {'Content-Type': 'text/plain'})
        response.write(error + '\n')
        response.end()
        return
      }

      response.writeHead(200)
      response.write(file, 'binary')
      response.end()
    })
  })
})

server.listen(parseInt(port, 10), function(){
  console.log('Static file server running at\n  => http://localhost:' + port + '/\nCTRL + C to shutdown')
})



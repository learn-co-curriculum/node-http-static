# Node Static File Server

## Objectives

1. Implement rudimentary static web server
1. Use the fs (file system) module which will serve some HTML file like Apache or Nginx web server
1. Create index.html that will be served by the Node server


## Introduction

Every web page on the Internet is served by some HTTP web server. For this simple reasons, building web servers is an important skill to have. Single-page applications and static web pages (static files) which don't require server-side logic, can be served by static HTTP web servers like Apache, or Nginx.

In this lab, you'll build a static file server to serve static files over the HTTP protocol.

## Instructions

1. Create file `server.js`
1. Implement HTTP server with `http`
1. Read `request.url` to get the file name. 
1. Boot the server with the value from a command-line argument or if not set value 3000.
1. Read the file and serve it to the client. Handle the errors accordingly when reading files (404 Not Found).
1. Server must send back 200 on success (along with the file content) and 404 when file not found along with `404 Not Found\n` body.
1. Run tests with `npm install && npm test`, or just `npm test`.


### Extra Info

Here are some hints:

1. To read `request.url` to get the file name, use `path.join()`.
1. To boot the server with the value from command-line argument or if not set value 3000, use `port = process.argv[2] || 3000`.
1. To read the file and serve it to the client, use `binary` mode as in `fs.readFile(filename, 'binary', function(error, file) {...}`

### Bonus

You can score bonus points for playing with the solution using debugger. There are mutliptle way to do so. You can use next (`n`) or step (`s`), but in most cases you would have to look at many statements if you want to get to the callback (i.e., request handler). The easiest way to do it, is to put a `debugger` statement in the callback, start the server in debug mode and submit a request with CURL or browser. 

To put a `debugger` statement, simply type `debugger` in the `server.js` file and save it. To start the server in debug mode, use `node debug server`, then press `c` for continue (`n` is better, because you can move to the next statement). The server will listen for incoming requests. Now, submit your request with CURL, Postman or just by going to the browser. This will stop the debugger at your breakpoint. You can use `repl` or any other commands now. Enjoy the show!

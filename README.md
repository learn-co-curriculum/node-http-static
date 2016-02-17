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
2. Implement HTTP server with `http`
3. Read `request.url` to get the file name. 
4. Boot the server with the value from a command-line argument or if not set value 3000.
5. Read the file and serve it to the client. Handle the errors accordingly when reading files (404 Not Found).
6. Server must send back 200 on success (along with the file content) and 404 when file not found along with `404 Not Found\n` body.
7. Run tests with `npm install && npm test`, or just `npm test`.


### Extra Info

Here are some hints:

1. To read `request.url` to get the file name, use `path.join()`.
1. To boot the server with the value from command-line argument or if not set value 3000, use `port = process.argv[2] || 3000`.
1. To read the file and serve it to the client, use `binary` mode as in `fs.readFile(filename, 'binary', function(error, file) {...}`


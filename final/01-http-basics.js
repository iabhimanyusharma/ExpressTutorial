const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url // request is an object with lots of properties
  // url is one such property which signals the url being requested by the client
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' }) // res.Writehead sends info about the headers
    res.write('<h1>home page</h1>')
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end() // res.end() conveys the message to be complete
    // res.end should always be tjere at the end of all respose messages
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000, ()=> {
  console.log('Server is listening at port 5000');
})

const fs = require('fs')


const requestHandler = (req, res) =>{
    const { url = '', method = '' } = req
    // console.log(url, method)
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
      //   res.on()
        res.write('<html><head><title>My webpage</title></head><body>Welcome to frontpage</body></html>')
        return res.end()
    }
    if(url === '/test'){
      res.setHeader('Content-Type', 'application/json')
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        // res.on()
        res.write(JSON.stringify({
          name : "Test User",
          id : "123"
        }))
        return res.end()
    }
}

exports.handler = requestHandler
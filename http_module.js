
let http = require("http");

// Create an HTTP server
let server = http.createServer((req, res) =>{   // callback function jo har request pr call hoga
       
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'}); // response header
        res.write("<h1> Wellcome to the Home page..</h2>") // response body
        res.end();                                        // response end
    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1> This is the About page..</h2>")
        res.end();
    }else if(req.url === '/contact'){
        res.setHeader('Content-Type', 'text/html');  // res.writeHead(200, {'Content-Type': 'text/html'});  // dono same kaam krte h
        res.write("<h1> This is the Contact page..</h2>")
        res.end();
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("<h1>404 Page Not Found</h1>");
        res.end();
    }

});


let port = 3000;
server.listen(port, () =>{
    console.log("Harshit Shrivas ka server running on port 3000...");   // jab server start ho jaye to ye message show hoga
    
})
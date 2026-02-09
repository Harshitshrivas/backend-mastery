
let url = require('url'); // Importing url module
let http = require("http"); // Importing http module

// Example URL
let exampleUrl = "https://www.example.com:8080/path/to/resource?name=harshit&age=25#section1";

// Parse the URL
let parsedUrl = url.parse(exampleUrl, true); // true to parse query string into an object
console.log("Parsed URL: ", parsedUrl);

// Get specific components of the URL
console.log("Protocol: " + parsedUrl.protocol);
console.log("Host: " + parsedUrl.host);
console.log("Hostname: " + parsedUrl.hostname);
console.log("Port: " + parsedUrl.port);
console.log("Pathname: " + parsedUrl.pathname);
console.log("Query: ", parsedUrl.query);
console.log("Hash: " + parsedUrl.hash);


// Create an HTTP server
let server = http.createServer((req, res) =>{   

    const parsedRequestUrl = url.parse(req.url, true);
    console.log("Incoming Request URL: ", parsedRequestUrl);
    const path = parsedRequestUrl.pathname;     // route
    const query = parsedRequestUrl.query;       // query params

        res.setHeader("Content-Type", "text/html");

    if(path === '/'){
        res.writeHead(200); 
        res.write("<h1> Wellcome to the Home page..</h1>") 
        res.end();                                        
    }else if(path === '/about'){
        res.writeHead(200); 
       res.end(`<h1>This is About page</h1>
             <p>Name: ${query.name || "Guest"}</p>`);    // http://localhost:3000/about?name=Harshit

    }else if(path === '/contact'){
        res.writeHead(200); 
        res.write("<h1> This is the Contact page..</h1>")
        res.end();
    }
    else{
        res.writeHead(404);
        res.write("<h1>404 Page Not Found</h1>");
        res.end();
    }
});


let port = 3000;
server.listen(port, () =>{
    console.log("Harshit Shrivas ka server running on port 3000...");  
    
})
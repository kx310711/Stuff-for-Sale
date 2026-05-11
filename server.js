var http = require("http");
var url = require('url')
const itemsJson = require("./items.json");
const path = require("path");
http.createServer(function (req, res){

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    console.log("req.method = " + req.method);
    var parsed = url.parse(req.url, true);
    console.log(parsed);

    if (req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.write (JSON.stringify(itemsJson));
        res.end();
        console.log("GET: returned:");
        console.log(itemsJson);
    }
    if (req.method === 'PUT'){
        var newItemName = parsed.query.newItemName;
        var newItemPrice = parsed.query.newItemPrice;

        if (!newItemName){
            console.log("PUT: newItemName is invalid");
            res.statusCode = 404;
            res.end();
            return;
        } 

        if (!newItemPrice){
            console.log("PUT: newItemPrice is invalid");
            res.statusCode = 404;
            res.end();
            return;
        } 

        var newId = (new Date(Date.now())).toDateString();
        itemsJson.push({"id": newId, "name": newItemName, "price": newItemPrice});
        res.statusCode = 200;
        res.end(); 
    }
    if (req.method === 'POST'){
        var itemId = parsed.query.id;
            
        
            switch(parsed.pathname) {
                case "/updateName":
                
                var newItemName = parsed.query.newItemName;

                if (!newItemName){
                    console.log("POST: newItemName is invalid");
                    res.statusCode = 404;
                    res.end();
                    return;
                }

                var jsonIndex = itemsJson.findIndex(item=>item.id===itemId);

                if (jsonIndex >= 0){
                    itemsJson[jsonIndex].name = newItemName;
                    res.statusCode = 200;
                }
                else {
                    res.statusCode = 404;
                }

                res.end();
                break;

            case "/updatePrice": 
                var newPrice = parsed.query.newPrice;

                if (!newPrice){
                    console.log("POST: newPrice is invalid");
                    res.statusCode = 404;
                    res.end();
                    return;
                }

                var jsonIndex = itemsJson.findIndex(item=>item.id===itemId);

                if (jsonIndex >= 0){
                    itemsJson[jsonIndex].price = newPrice;
                    res.statusCode = 200;
                }
                else {
                    res.statusCode = 404;
                }

                res.end();
                break;

            default: 
            res.statusCode = 404;
            res.end();

           }
    }

    if (req.method === "DELETE"){
       var itemId = parsed.query.id;
       var jsonIndex = itemsJson.findIndex(item=>item.id===itemId);

       if (jsonIndex > 0 ){
        itemsJson.splice(jsonIndex, 1);
        res.statusCode = 200;
       }
       else {
        res.statusCode = 404;
       }
       res.end();
    }

    if (req.method === 'OPTIONS'){
        res.statusCode = 200;
        res.end();
    }

}).listen(3000, function(){
    console.log("server started at port 3000...");
})
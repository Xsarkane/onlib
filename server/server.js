var fs = require('fs');
var express = require('express');
var app = express();


var books = fs.readFileSync('C:\\Users\\nikk2\\WebstormProjects\\online-library\\api\\books.json',function (err, book) {
    if (err) throw err;
    console.log(book.toString());
});

app.get('/', function(req,res){
res.send('Api works!');
});

app.get('/api/books', function (req,res) {
    res.send(books)
});

app.get('/api/books/:id',function (req, res) {
    res.JSON.parse(book);
});

/*app.get('/api/book/:id', function (req, res) {
console.log(req.params);
var books = books.find(function (books) {
    return books.id === Number (req.params.id);
});
    res.send(books);
});*/

/*app.get('/api/book/:id',function(req,res){
    var i;
    for(i=0;i<books;++i)
    {
        if (req.param().id === books[i].id) {
    res.send(books[i]);
}
    }
});*/

app.listen(8080);
console.log("Server run on 8080");

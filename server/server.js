var fs = require('fs');
var express = require('express');
var app = express();

// Читаем массив из файла books.json
var books = fs.readFileSync('C:\\Users\\nikk2\\WebstormProjects\\online-library\\onlib\\api\\books.json',function (err) {
    if (err) throw err;
});

// Отправляю GET запрос для проверки работы API
app.get('/', function(req,res){
res.send('Api works!');
});

//Отправляю GET запрос для отображения всех книг
app.get('/api/books', function (req,res) {
    res.send(JSON.parse(books))
});

//Отправляю GET запрос для поиска книг по id
app.get('/api/book/:id',function (req, res) {
    var id = req.params.id;
    var flag = false;
    for (var i = 0; i < books.lenght; i++)
        if (books[i].id === id){
        res.send(JSON.parse(books[i]));
        flag = true;
        break
    }
    if (!flag){
        res.send('Cannot find book with this id')
    }
});

// Располагаю сервер на 8080 порту
app.listen(8080);
console.log("Server run on 8080");

"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url)
    .then(function (respons) {
    var todo = respons.data, id = todo.id, title = todo.title, finished = todo.completed;
    logTodo(id, finished, title);
});
function logTodo(id, finished, title) {
    console.log("\n            Todo ID: ".concat(id, ".\n            Todo Title: ").concat(title, ".\n            Is todo finished: ").concat(finished, ".\n        "));
}

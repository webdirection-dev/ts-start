let str: string
let boo: boolean

str = 'abc'
boo = true

let num = 123
let myScore: number | string // это тип данных union, т.е. совмещенный


// Песвдоним типа (алиас)
// Алиас всегда с заглавной буквы
type Score = number | string
const myScore2: Score = 'str'

// Анотация типов происходит автоматически, ислючение в 3х случаях:

// 1 Когда функция возвращает тип any (любой тип) и нужно уточнить возвращаемый тип
let x = JSON.parse('12') // let x: any
let xx: number = JSON.parse('12') // let xx: number

let str2 = JSON.parse('str') // let str2: any
let str2x: string = JSON.parse('str') // let str2x: string

// 2 Когда переменная объявляется на одной строке, а значение ей присваивают на другой строке
let isOdd: boolean
if (xx%2 === 0) isOdd = false
else isOdd = true

// 3 Когда тип сложносоставной и не определялся бы автоматически
let test: number | string = 10


// import axios from "axios";
// const url = 'https://jsonplaceholder.typicode.com/todos/1'
//
// название интерфейсов начинать через I
// interface ITodo {
//     id: number,
//     title: string,
//     completed: boolean,
// }
//
// axios.get(url)
//     .then(respons => {
//         const todo = respons.data as ITodo,
//             id = todo.id,
//             title = todo.title,
//             finished = todo.completed
//
//         logTodo(id, finished, title)
//     })
//
// function logTodo(id: number, finished: boolean, title: string) {
//     console.log(`
//             Todo ID: ${id}.
//             Todo Title: ${title}.
//             Is todo finished: ${finished}.
//         `)
// }
//

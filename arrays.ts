// Массивы в TS делятся на 2 части

// 1 Списки (lists)
// Все элементы списка имеют один тип: массив строк, массив чисел и тд
// Количество элементов массива Неограничено, т.е. [].length === неограничено
const arr = [] // const arr: any[]
const arr2: string[] = ['a', 'b', 'c'] // const arr2: string[]
// const arr2: string[] = ['a', 'b', 'c', 2] ошибка
// arr.push2(2) // ошибка

// альтернативный синтаксис
const arr3: Array<number> = [1, 2, 3]
// const arr3: Array<number> = [1, 2, 3, true] - ошибка

const arr4: string[][] = []
arr4.push(['a', 'b', 'c'])
// arr4.push(['a', 'b', 'c', 4]) ошибка

// Alias
type MyArr = (string | number)
const arr5: MyArr[][] = []
arr5.push(['a', 2])


// 2 Кортежи (tuples)
// Элементы кортежа могут иметь разный тип
// Количество элементов массива Ограничено, т.е. [].length === фиксированно
const tuple: [string, boolean, number] = ['str', true, 4]
// кортежи хорошо подходят для CSV
type SinpleCSV = [string, string, number]
const scvArr: SinpleCSV[] = [['a', 'b', 4]]

// Приимущества типизации массивов ПРЕДСКАЗУЕМОСТЬ
const arrEl = ['', '', '']
let el = arrEl[0] // el === string
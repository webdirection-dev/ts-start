// Сохраняем значение
const valueFactory = (x: number) => x
const myValue = valueFactory(11)

// Сохраняем типы
type TypeFactory<X> = X
type MyTypeG = TypeFactory<string>

// generic описание
interface ValueContainer<Value> {
    value: Value
}

type StringContainer = ValueContainer<string>
const xX: StringContainer = {
    value: 'str'
}

// generic использование
// Пример с Classes
class ArrayOfNumber {
    constructor(public collection: number[]) {
        // this.collection = collection данную строку можно пропустить так как TS автоматически ее поймет
    }

    get(index: number): number {
        return this.collection[index]
    }
}

class ArrayOString {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index]
    }
}

// Чтобы не дублировать код создадим универсальный класс
// При такой записи два предыдущих класса перестают быть нужными
// По соглашению имя параметра Type - это буква T
class ArrayOfAnything<Type> {
    constructor(public collection: Type[]) {}

    get(index: number): Type {
        return this.collection[index]
    }
}

new ArrayOfAnything<string>(['a', 'b' , 'c']) // массив строк
new ArrayOfAnything<number>([1, 2, 3]) // массив чисел


// generic использование
// Пример с Functions
function printString(arr: string[]): void {
    for (let i of arr) {
        console.log(i)
    }
}

function printNumber(arr: number[]): void {
    for (let i of arr) {
        console.log(i)
    }
}

// T по соглашению означает Type
function printAnyThing<Type>(arr: Type[]): void {
    for (let i of arr) {
        console.log(i)
    }
}

printAnyThing<number>([1, 2, 34])


// Расширенный пример generic
function fillArray<T>(length: number, elem: T): T[] {
    return new Array<T>(length).fill(elem)
}

const arrG = fillArray<string>(4, 'str')

// Еще сложный пример generic
interface Array<T> {
    concat(...items: Array<T[] | T>): T[];

    reduce<U> (
        callback: (state: U, element: T, index: number, arr: T[]) => U, firstState?: U
    ): U
}

// Уточнение параметра типа
// Пример 1
interface ILengthwise {
    length: number
}

function printLength<T extends ILengthwise>(arg: T): number {
    return arg.length
}

printLength('123')

// Уточнение параметра типа
// Пример 2
// extends keyof - наследовать значения из переданного типа
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

const myObj = {
    a: 1,
    b: 2,
    c: 3,
} // K === 'a' | 'b' | 'c'

getProperty(myObj, 'a')
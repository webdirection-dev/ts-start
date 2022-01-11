const obj = {a: 1, b: 2, c: 'str'}

// алтернатива
const obj2: {
    a: number,
    b: number,
    c: string
} = {a: 1, b: 2, c: 'str'}

// best practice
// Alias
type MyType = {a: number, b: number, c: string}
const obj3: MyType = {a: 10, b: 20, c: 'str'}

// best practice
// interface
// название интерфейсов начинать через I
interface IMyObj2 {
    a: number;
    readonly b: number; // неизменяемый элемент, предназначен только для чтения
    c?: string; // наличие элемента необязательно
    // print?: () => number; // метод опционально
    [key: string]: string | number; // любое количество элементов после элементов a, b, c
}
const obj4: IMyObj2 = {a: 11, b: 22, c: 'str'}
const obj5: IMyObj2 = {a: 111, b: 222} // ошибки нет потому что  c?: string т.е. элемента с может и не быть в объекте

// Объединение Интерфейсов
// название интерфейсов начинать через I

// 1 одноименные интерфейсы
interface IPerson {
    name: string;
}

interface IPerson {
    age: number;
}
// let person: Person ={name: 'John'} ошибка
let person: IPerson ={name: 'John', age: 30} // ошибки нет

// 2 разноименные интерфейсы
interface IAccount {
    email: string;
    login: string;
    active: boolean
}

interface IDeveloper extends IPerson, IAccount {
    skills: string[];
    level?: string
}

const john: IDeveloper = {
    name: 'John',
    age: 30,
    email: '',
    login: '',
    active: false,
    skills: ['a', 'b'],
}


// Объединение типов
type Person = {a: number; b: number; c: string}
type Person2 = {d: true}
type Person3 = Person & Person2 // сложноставной тип

const arrDev: Person3[] = [
    {a: 1, b: 2, c: '', d: true},
    {a: 1, b: 2, c: '', d: true},
]
// JS
const fn = num =>  {
    return String(num)
}

// TS
const fn2: (num: number) => string = num =>  {
    return String(num)
}

// алтернативный TS
const fn3 = (num: number): string =>  {
    return String(num)
}

// CallBack
const fn4 = (cb: (num: number) => string) => {
    cb(3)
}

// CallBack + Alias
type Callback = (num: number) => string

const fn5 = (cb: Callback) => {
    cb(3)
}

// Опциональный Калбэк
const fn6 = (cb?: Callback) => {
    if (cb === undefined) cb = String
    console.log(cb(12))
}


// Параметры по умолчанию
// JS
function createPoint(x = 0, y = 0) {}
createPoint() // x = 0, y = 0
createPoint(10, 20) // x = 10, y = 20

// TS
// не требуется писать x? = 0 тк TS понимает что параметры опциональны
function createPointTS(x: number = 0, y: number = 0): [number, number] {
    return [x, y]
}


// REST
function n7(...elems: number[]): string {
    return  elems.join(' ,')
}

// Func + Obj
interface IPrintable {
    label: string
}

// void значит без return
function printReport(obj: IPrintable): void {
    console.log(obj.label)
}

const drink = {
    label: 'pepsi',
    price: 90
}

printReport(drink) // ошибки не будет тк в drink есть значение label


// Перегрузка функций
function pickCard(x: number | {suit: string; card: number}[]): {suit: string; card: number} | number {
    return
}

// Альтернатива писать две функции
function pickCard2(x: number) : {suit: string; card: number}
function pickCard2(x: {suit: string; card: number}[]) : number

function pickCard2(x) : any {
    if (typeof x === 'object') return x[0].card
    else if (typeof x === 'number') return {suit: '', card: x}
}

pickCard2(7)
pickCard2([{suit: '', card: 7}])

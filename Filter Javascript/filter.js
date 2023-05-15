const Listanumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 200, 30400404, 014030, 3423, 23423,54]

const novaLista = Listanumeros.filter((item) => {
    return item > 10
})


const novaLista2 = Listanumeros.filter((item) => {
    return item % 2 === 0 
})

console.log(novaLista)

console.log(novaLista2)
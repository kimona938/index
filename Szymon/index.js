const przycisk = document.querySelector('button')
const pole = document.querySelector('input')
const lista = document.querySelector('ul')
przycisk.addEventListener('click', ()=>{
    const wartosc = pole.value
console.log(wartosc)
const element = document.createElement('li')
element.innerText = 'zadanie'

lista.appendChild(element)


})




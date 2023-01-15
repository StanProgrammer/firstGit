// console.dir(document)
// document.title='Good times'
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)
var title=document.getElementById('header-title');
console.log(title)
// title.textContent='Add Now'

var header=document.getElementById('main-header');
var headerTitle=document.getElementById('header-title')
header.style.borderBottom='5px solid black';
console.log(header.textContent)

const items=document.querySelector('.title');
items.style.fontWeight = "bold"
items.style.color = "green"

headerTitle.innerHTML='<h3>Hello<h3>'

const item1=document.getElementsByClassName('list-group-item');
// for(let i of item1){
//     console.log(i)
// }
item1[2].style.backgroundColor='green'
// item1[].style.fontWeight='bold'
for(let i of item1){
    i.style.fontWeight='bold';
}
const li1=document.querySelector('.list-group-item');

const li2=document.createElement('li');
li2.textContent='Hello World'
li2.classList.add('title2')
const head=li1.parentNode
// console.log(li2)
head.appendChild(li2)

const edit1=document.getElementsByClassName('title2');
// const edit1=document.querySelector('.title2')
edit1[0].textContent='Hello People'
// console.log(edit1[0].textContent)

const edit2=document.getElementsByTagName('li');
// console.log(edit2[4].textContent)
edit2[4].textContent='Hello India';

const second=document.querySelectorAll('.list-group-item');
console.log(second[0].textContent)
second[1].style.backgroundColor='green'

const second1=document.querySelector('.list-group-item:first-child');
console.log(second1.textContent)

const second2=document.querySelectorAll('.list-group-item');
second2[2].style.visibility='hidden';

const second3=document.querySelectorAll('li');
console.log(second3[0].textContent)





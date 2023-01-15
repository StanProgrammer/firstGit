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



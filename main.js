var form=document.getElementById('addForm')
var itemList=document.getElementById('items')

itemList.addEventListener('click',removeItem)
form.addEventListener('submit',additem)
function additem(e){
    e.preventDefault();
    const newItem=document.getElementById('item').value
    const newItem1=document.getElementById('item1').value
    
    // Create Element
    const li= document.createElement('li')
    li.className='list-group-item '
    // li.appendChild(document.createTextNode(`${newItem} ${newItem1}`))
    li.appendChild(document.createTextNode(`${newItem} `))
    li.appendChild(document.createTextNode(`${newItem1}`))

    //Create Button
    const deleteBtn=document.createElement('button')
    deleteBtn.className='btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'))

    li.appendChild(deleteBtn)
    itemList.appendChild(li)

    const editBtn=document.createElement('button')
    editBtn.className='btn btn-primary btn-sm float-right mr-1'
    li.appendChild(editBtn)
    editBtn.appendChild(document.createTextNode('edit'))
    itemList.appendChild(li)
    
}

function removeItem(e){
    // e.preventDefault()
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}
const filter=document.getElementById('filter');
filter.addEventListener('keyup',filterItems)
function filterItems(e){
    var text=e.target.value.toLowerCase()
    var items=itemList.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var itemName1=item.firstChild.nextSibling.textContent;
        // console.log(itemName1)
        if(itemName.toLowerCase().indexOf(text)!=-1 || itemName1.toLowerCase().indexOf(text)!=-1){
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    })
}


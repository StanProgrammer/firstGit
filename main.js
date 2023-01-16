var form=document.getElementById('addForm')
var itemList=document.getElementById('items')

itemList.addEventListener('click',removeItem)
form.addEventListener('submit',additem)
function additem(e){
    e.preventDefault();
    const newItem=document.getElementById('item').value
    
    // Create Element
    const li= document.createElement('li')
    li.className='list-group-item'
    li.appendChild(document.createTextNode(newItem))

    //Create Button
    const deleteBtn=document.createElement('button')
    deleteBtn.className='btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'))

    li.appendChild(deleteBtn)
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



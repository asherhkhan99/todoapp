var list = document.getElementById('list');



function addTodo(){
    var todo_item = document.getElementById('todo-item')
    
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    
    li.appendChild(liText)
    


    var delBtn = document.createElement('button')
    var delText = document.createTextNode('delete')
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)") 
    delBtn.appendChild(delText)
    li.appendChild(delBtn)

    var editBtn = document.createElement('button')
    var editText = document.createTextNode("edit")
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)

    list.appendChild(li)
    todo_item.value=""
}

function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){

    var editVal = prompt("enter new value")
    e.parentNode.firstChild.nodeValue = editVal

}

function delAll(){
    list.innerHTML = ""
}

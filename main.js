let inp = document.querySelector('.text')
let addTodo = document.querySelector('.addTodo')
let todoBox = document.querySelector('.todoBox')

let count = 0

let todo = {
    title: ''
}

let locol = []

function getValue(obj) {
    inp.addEventListener('keyup', (event) => {
        let value = event.target.value
        obj.title = value
    })

    localStorage.setItem("inp", JSON.stringify(obj.title))

    // locol = JSON.parse(localStorage.getItem('inp') || "[]")
    // locol.forEach(Item => {
    //     let li = document.createElement('li')
    //     li.innerHTML = Item.title + ": " + Item.count
        
    // });

}

getValue(todo)

addTodo.addEventListener('click', (event) => {
    event.preventDefault()
    getValue(todo)
    count++

    let todoHtml = `
    <li class="todo" id="${count}" >
   ${todo.title}
    <div>
        <button data-delete="salom" class="delete">X</button>
        <button class="change"><i class='bx bxs-chat'></i></button>
    </div>
  </li>`

    todoBox.insertAdjacentHTML("beforeend", todoHtml)
    inp.value = ''

    

})

window.addEventListener('click', (event) => {
    let btn = event.target.dataset.delete
    if (btn) {
        let todo = event.target.closest('.todo')
        todo.remove()
    }
})


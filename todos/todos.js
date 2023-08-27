function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}

function displayTodos(data) {

    const todosContainer = document.getElementById('todos-container')

    for (const todo of data) {
        console.log(todo);
        const todosDiv = document.createElement('div')
        todosDiv.innerHTML = `
        <h2> User Id: ${todo.userId} </h2>
        <h2> Id: ${todo.id} </h2>
        <h2> Title: ${todo.title} </h2>
        <h2> Is Completed: ${todo.completed === true ? "Completed" : "Not Completed"} </h2>
        `;
        todosContainer.appendChild(todosDiv)
    }
}

loadTodos()
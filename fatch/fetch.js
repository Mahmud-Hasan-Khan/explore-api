// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayData(data))
}

function displayData(data) {
    const ul = document.getElementById('users-list')
    for (const user of data) {
        // console.log(user);
        const li = document.createElement('li')
        li.innerText = user.name
        ul.appendChild(li);
    }
}
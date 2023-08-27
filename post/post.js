function loadPostData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
/*
1. get the container element, where you want to add the new elements.
2. create child element
3. set innerText or innerHTML
4. appendChild
*/

function displayPost(data) {

    const postContainer = document.getElementById('post-container');
    for (const post of data) {
        console.log(post);
        const { id, title, userId, body } = post
        const div = document.createElement('div');
        div.classList.add('p-2', 'm-4', 'rounded-xl', 'bg-cyan-100')

        div.innerHTML = `
        <h4 class="text-xl">User: ${userId}</h4>
        <h5 class="text-lg">Post Title: ${title}</h5>
        <p class='text-base'>Post Description: ${body}</p>
        `;
        postContainer.appendChild(div)
    }
}

loadPostData();
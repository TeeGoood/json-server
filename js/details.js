// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');
const likeBtn = document.querySelector('.likeBtn');

likeBtn.addEventListener('click', async () => {
    await fetch('http://localhost:3000/posts/' + id ,{
        method : 'PATCH',
        body: { "likes": post.likes + 1 },
        headers: {
            'Content-Type':'application/json'
        }
    });
});

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/posts/'+ id );
    
    const post = await res.json();
    
    const template = `
            <div class="post" style="margin: 20px;">
                <h1>${post.title}</h1>
                <p>${post.body}</p>
                
            </div>
        `;
    container.innerHTML += template;

    
}

window.addEventListener('DOMContentLoaded',renderDetails());

deleteBtn.addEventListener('click', async () => {
    fetch('http://localhost:3000/posts/'+ id, {
        method : 'DELETE',
    });
    //window.location.replace('/index.html');
})


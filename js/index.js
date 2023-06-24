// javascript for index.html
const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderPost = async (term) => {
    let uri = "http://localhost:3000/posts?_sort=likes&_order=desc";

    if(term){
        uri += `&q=${term}`;
    }

    const res = await fetch(uri);
    const data = await res.json();

    let template = '';
    data.forEach( post => {
        template += `
            <div class="post">
            <h1>${post.title}</h1>
            <p><small>${post.likes} likes </small></p>
            <p>${post.body.slice(0,200)}</p>
            <a href="details.html?id=${post.id}">read more...</a>
            </div>
        `
    });

    container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded',(e)=> renderPost() );

searchForm.addEventListener('submit',(e) => {
    e.preventDefault();
    renderPost(searchForm.term.value.trim());
})

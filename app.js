const postsContainer = document.getElementById('post-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 5;
let page = 1;

async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/guide.html/1/posts?_limit=${limit}&_page=${page}`);
    const data = await res.json();
    return data;
}

async function showPosts() {
    const posts = await getPosts();
    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
            <h2 class ="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
        </div>
        `;
        postsContainer.appendChild(postEl);
    });
}
function showLoading() {
    loading.classList.add('show');
}
showPosts();

window.addEventListener('scroll', () => {
    // console.log(document.documentElement.scrollTop);
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
    }
});
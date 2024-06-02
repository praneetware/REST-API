document.getElementById('fetch-posts').addEventListener('click', fetchPosts);

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById('posts-container');
            postsContainer.innerHTML = ' ';
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
    
}



fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => appendData(data))
  .catch(err => console.log('error: ' + err));

  function appendData(data) {
    const mainContainer = document.getElementById("users");
    for (const user of data) {
      const li = document.createElement("li");
      li.innerHTML = "User Name = " + "  "  + user.username + " ,   Email = " + user.email;
      li.dataset.userId = user.id;
      li.addEventListener('click', event => getPosts(event));
      mainContainer.appendChild(li);
    }
  }
  
  function getPosts(event) {
    const userId = event.target.dataset.userId;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(json => renderPosts(json));
  }

  function renderPosts(posts) {
    const titleContainer = document.getElementById("postTitle");
    const bodyContainer = document.getElementById("postBody");
    for (const post of posts) {
      const liTitle = document.createElement("li");
      const liBody = document.createElement("li");
      liTitle.innerHTML = "Comment = " + post.title;
      liBody.innerHTML = post.body;
      titleContainer.appendChild(liTitle);
      bodyContainer.appendChild(liBody);
    }
  }




 
// fetch - this fn allows us to make http requests in the browser

// // fetchUsers

// users data => db, json, some storage

// sir's example
// fetch("http://127.0.0.1:5500/Async/3%20-%20Promise%20-%20the%20solution/example%20-%20data%20fetch%20&%20save%20simulation/user.json")
// .then(result => {
//     console.log(result)
//     // result.text().then(res => console.log(res))
//     // JSON.parse
//     return result.json();
// }).then(data => console.log(data))
// .catch(error => console.log(error))

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((result) => console.log(result));

function showLoader() {
  document.getElementById("status").textContent = "loading...";
}
function clearLoader() {
  document.getElementById("status").textContent = "";
}

function fetchPosts(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
    (response) => response.json()
  );
}

function fetchComments(postId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  ).then((response) => response.json());
}

function fetchUsers() {
  return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json()
  );
}

function showComments(comments) {
  console.log(comments);
  //         < ul >
  //                 <li>comment 1</li>
  //                 <li>comment 2</li>
  //                 <li>comment 3</li>
  //             </ul >

  const ulElement = document.createElement("ul");

  // getting the users
  // const usersArr = fetchUsers();
  // console.log(usersArr);

  if (comments.length > 0) {
    for (let comment of comments) {
      const li = document.createElement("li");

      li.innerText = `UserName: ${comment.email.split("@")[0]}\n says: ${
        comment.body
      }`;
      ulElement.appendChild(li);
    }

    const commentSection = document.getElementById("comments");
    commentSection.appendChild(ulElement);
  }
}

function showUserName(userEmail) {}

function showPosts(post) {
  const postElement = document.getElementById("post");
  postElement.innerHTML = `<article id=${post.id}>
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <section id="comments">
            <h2>comments</h2>
        </section>
    </article>`;
  return post.id;
}

document.querySelector("#show").addEventListener("click", function () {
  showLoader();
  fetchPosts(document.querySelector("#posts-id").value)
    .then(showPosts)
    .then(fetchComments)
    .then(showComments)
    .finally(clearLoader);
});

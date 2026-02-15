// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((result) => console.log(result));




function showLoader() {
  document.getElementById("status").textContent = "loading...";
}
function clearLoader() {
  document.getElementById("status").textContent = "";
}

async function fetchPosts(postId) {
 try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    if (!response.ok) {
      throw new Error(`Post fetch failed: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error("fetchPosts error:", err);
    throw err;
  }
}

async function fetchComments(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  return response.json();
}

async function fetchUsers() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  return response.json();
}

async function showComments(comments) {
  console.log(comments);
  const ulElement = document.createElement("ul");

  // getting the users
  const allUsers = await fetchUsers();
  

  if (comments.length > 0) {
    for (let comment of comments) {
      const li = document.createElement("li");

      // li.innerText = `UserName: ${comment.email.split("@")[0]}\n says ${comment.body}`;
      const randUserObj = allUsers[Math.floor(Math.random()*allUsers.length)];

      li.innerText = `UserName: ${
        randUserObj.name
      }\n says ${comment.body}`;

      ulElement.appendChild(li);
    }

    const commentSection = document.getElementById("comments");
    commentSection.appendChild(ulElement);
  }
}


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

document.querySelector("#show").addEventListener("click", async function () {
  try{
    showLoader();
    // fetchPosts(document.querySelector("#posts-id").value)
    //   .then(showPosts)
    //   .then(fetchComments)
    //   .then(showComments)
    //   .finally(clearLoader);
    
    const postId = document.querySelector("#posts-id").value;
    const posts = await fetchPosts(postId);
    showPosts(posts);

    const comments = await fetchComments(postId);
    showComments(comments);
  }
  catch(err){
    console.log("Something went wrong. Please check console");
  }
  finally{
    clearLoader();
  }

 
});

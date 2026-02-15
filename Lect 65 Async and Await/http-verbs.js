// const createNewPost = async () => {
//   const newPost = {
//     id: 999,
//     userId: 1,
//     title: "New Post Title",
//     body: "This is the post body.....",
//   };

//   let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(newPost),
//   });
// };

// // Put
// const postId = 1;
// const updatePost = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
//   method: "PUT",
//   body: JSON.stringify({
//     title: "updated TITLE"
//   })
// })

// const updatedPost = await

// Delete
async function main() {
  const postId = 1;
  const deltePost = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "DELETE",
    }
  );
}

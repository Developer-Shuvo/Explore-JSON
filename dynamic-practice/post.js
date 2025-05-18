// function postInfo() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => displayPost(data));
// }

// // function displayPost(posts) {
// //   const postContainer = document.getElementById("post-container");
// //   for (const post of posts) {
// //     const div = document.createElement("div");
// //     div.innerHTML = `
// //         <h3> User Id : </h3>`;
// //   }
// // }

// postInfo();

function postInfo() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}

function displayPost(posts) {
  const postContainer = document.getElementById("post-container");

  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
      <h3 style="color: #2c3e50; margin-bottom: 5px; font-weight: bold; font-size: 20px;">
      <span style="font-weight: bold; font-size: 20px;">User Id:</span> ${post.userId}</h3>



      <h4 style=" margin: 0 0 8px 0; font-weight: semi-bold; font-size: 16px;">
      <span style="font-weight: bold; font-size: 20px;">Title:</span><span style="font-weight: bold; font-size: 10px;"></span> ${post.title}</h4>




      <p style=" font-size: 15px; line-height: 1.5;">
      <span style="font-weight: bold; font-size: 20px;">Body:</span> ${post.body}</p>
    `;
    postContainer.appendChild(postDiv);
  }
}

postInfo();

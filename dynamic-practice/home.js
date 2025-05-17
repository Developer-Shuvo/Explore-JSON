function clickHere() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => display(data));
  console.log("Data fetched successfully");
}

function display(data) {
  const ul = document.getElementById("ul-info");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
    console.log(user.name);
  }

}
// * On click button.........{dynamicData} is called here in function
// *
// *
function dynamicData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => display(data));
}

// now i provide a randon funciton name {display} to show the data
function display(data) {
  const ul = document.getElementById("user-list");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = user.address.city;
    ul.appendChild(li);
    console.log(user.name);
  }
}

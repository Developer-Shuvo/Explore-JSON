// const url = 'https://jsonplaceholder.typicode.com/users';

// function userData (){
//     fetch(url)
//     .then (response => response.json())
//     .then (json => console.log (json));
// }



fetch("https://jsonplaceholder.typicode.com/users")
document.getElementById("userBtn").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => console.log(json));

});
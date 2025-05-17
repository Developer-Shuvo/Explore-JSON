const information = {
  name: "Shuvo",
  age: 22,
  height: 5.8,

  hobbies: ["reading", "gaming", "coding"],
  address: {
    street: "123 Main St",
    city: "Dhaka",
    country: "Bangladesh",
  },
  isStudent: true,
  courses: [
    {
      name: "Computer Science & Engineering",
      duration: "4 years",
    },
  ],
};
// Normal console log
console.log(information);

// Stringify the object to JSON format
const convertJson = JSON.stringify(information);
console.log(convertJson);

// Parse the JSON back to an object
// const convertBack = JSON.parse(convertJson);
// console.log(convertBack);

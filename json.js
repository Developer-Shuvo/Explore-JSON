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

console.log(information);
const convertJson = JSON.stringify (information);
console.log(convertJson);

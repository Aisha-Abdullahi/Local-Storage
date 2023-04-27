const user = {
  id: 1,
  name: "John",
  age: 25,
};

const userString = JSON.stringify(user);

console.log(userString);

localStorage.setItem("user", userString);

const storedUserString = localStorage.getItem("user");

const storedUser = JSON.parse(storedUserString);


console.log(storedUser);


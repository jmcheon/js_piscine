const id = document.querySelector("#id");
const password = document.querySelector("#password");
const button = document.querySelector("button");

button.addEventListener("click", login);

function login() {
  const request = {
    id: id.value,
    password: password.value,
  };
  // console.log(request);
  // console.log(JSON.stringify(request));
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
}

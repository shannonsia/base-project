const button = document.getElementById("counter-button");
const counter = document.getElementById("counter");

let count = 0;

button.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});

const username = document.querySelector(".username");
const email = document.querySelector(".email");
const submit = document.querySelector(".submit");


username.addEventListener('change', () => {
  if(username.value.length > 0 && email.value.length >0) {
    submit.removeAttribute('disabled');
    console.log(`Username = ${username.value}`)
    console.log(`Email = ${email.value}`)
  }
})

email.addEventListener('change', () => {
  if(email.value.length > 0 && username.value.length > 0){
    submit.removeAttribute('disabled');
    console.log(`Username = ${username.value}`)
    console.log(`Email = ${email.value}`)
  }
})


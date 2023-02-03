const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;
const liItems = document.querySelectorAll("li")




const fun1 = () => {

if (pass.value.length >= minValue) {
    liItems[0].style.color = "green"
    p.textContent = "Masz dobre hasło"
    p.style.color = "lime"
}

else {liItems[0].style.color = "white"}

if (pass.value.match(numbers)){
    liItems[2].style.color = "green"
    p.textContent = "Masz bardzo dobre hasło"
    p.style.color = "lime"
}

else {liItems[2].style.color = "white"}

if (pass.value.match(letters)){
    liItems[1].style.color = "green"
}

else {liItems[1].style.color = "white"}

if (pass.value.match(special)){

}

}




pass.addEventListener('keyup', fun1)




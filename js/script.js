const input = document.querySelector(".form_input")
const but = document.querySelector(".form_button")

function writeBut (){
    but.innerHTML = input.value
}

but.addEventListener('click', writeBut)

const imgTask2 = document.querySelector(".imgs")
imgTask2.src = './imgs/js.png'

const link = document.querySelector(".link")
link.href = 'https://twitter.com/?lang=en'

const item = document.querySelector(".list").firstElementChild;
item.textContent = 'rename';
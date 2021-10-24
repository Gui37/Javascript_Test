//single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
//multiple element
/*
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));
*/
/* selecção de elementos do html
const ul = document.querySelector('.items')
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Ola Mundo';
ul.children[1].innerText = 'Guifty';
ul.lastElementChild.innerHTML = '<h1> Olá<h1>';
*/
/*const btn = document.querySelector('.btn');
btn.style.background = 'Blue';
//eventos do botão
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background= '#ccc';
    document.querySelector('body').classList.add('bg-dark');
});*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML='Por favor Preencha todos os campos';
        setTimeout(() => msg.remove(),3000);
    } else {
        console.log("Adicionado com sucesso");
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} :${emailInput.value}`));

        userList.appendChild(li);

        //limpar os campos

        nameInput.value = '';
        emailInput.value ='';

    }
}
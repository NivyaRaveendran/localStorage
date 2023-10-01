let details = [];

const adddetail = (ev)=>{
    ev.preventDefault();  //to stop the form submitting

let detail = {

    title: document.getElementById('title').value,
    email: document.getElementById('email').value
}
details.push(detail);
document.forms[0].reset();

//display

console.warn('added' , {details} );
let pre = document.querySelector('#msg pre');
pre.textContent =  JSON.stringify(details);

//saving to localStorage
localStorage.setItem('MyList', JSON.stringify(details) );
}
document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('btn').addEventListener('click', adddetail);
});
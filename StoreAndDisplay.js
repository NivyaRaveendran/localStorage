function saveToLocalStorage(event) {
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.emailId.value;
    const phone=event.target.Phonenumber.value;
    console.log("1")
    const obj={
        name,
        email,
        phone
    }


}
function showUserOnScreen(obj) {
    const parentElem=document.getElementById('listOfitems')
    console.log("3")
    //parentElem.innerHTML=parentElem.innerHTML+ ${obj.name};
    const childElem=document.createElement('li')
    childElem.textContent=obj.name+ '-' +obj.email +'-'+obj.phone
    parentElem.appendChild(childElem)
    console.log("4")
}

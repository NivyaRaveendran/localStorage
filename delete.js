function saveTolocalStorage(event){
  event.preventDefault();
  const name =event.target.username.value;
  const email =event.target.emailId.value;
  const phonenumber =event.target.phonenumber.value;

  localStorage.setItem('name',name)
  localStorage.setItem('email',email)
  localStorage.setItem('phonenumber',phonenumber)

  const obj = {
  name,
  email,
  phonenumber
}
  localStorage.setItem(obj.email,JSON.stringify(obj))
  showUserOnScreen(obj)

}
function showUserOnScreen(obj) {
  const parentElem =document.getElementById('listofUsers')
  const childElem=document.createElement('li')
  childElem.textContent=obj.name + ' - ' + obj.email + ' - ' + obj.phonenumber
 

  const deleteButton =document.createElement('input')
  deleteButton.type="button"
  deleteButton.value="Delete"
  deleteButton.onclick = () =>{
      localStorage.removeItem(obj.email)
      parentElem.removeChild(childElem)
  }
  const editButton =document.createElement('input')
  editButton.type="button"
  editButton.value="edit"
  editButton.onclick = () =>{
      localStorage.removeItem(obj.email)
      parentElem.removeChild(childElem)
      document.getElementById('username').value=obj.name
      document.getElementById('email').value=obj.emailId
      document.getElementById('phonenumber').value=obj.phonenumber
  }
  
  childElem.appendChild(deleteButton)
  childElem.appendChild(editButton)
  parentElem.appendChild(childElem)
  
}
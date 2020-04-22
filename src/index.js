document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let inputNode = document.getElementsByTagName('input')[1];
  let colorNode = document.getElementById('priority')
  let color = colorNode.querySelectorAll('option') //something like an array


  color.forEach(element => {
    // console.log('working')
    console.log(element.innerText)
    colorNode.addEventListener('click', event =>{
      userInputNode.style.color = element.value
      console.log('working')
    })
  })


  //
  //
  //
  //
  // let colors = colorNode.querySelectorAll()
  // colorNode.addEventListener('click', function(event){
  //   event.preventDefault()
  //   console.log('working progress')
  // })
  let userInputNode = document.getElementById("new-task-description")
  
  inputNode.addEventListener('click',function(event){
    event.preventDefault()
    
    let list = document.createElement('li') //new li element
    let para = document.createElement('p') //new p element
    let deleteButton = document.createElement('button')// new button
    deleteButton.innerText = "delete"

    let ulNode = document.querySelector("ul#tasks");
    ulNode.appendChild(list); // ul > li
    list.appendChild(para); // li > p
    list.appendChild(deleteButton); // ul > li > p,button
    para.textContent = userInputNode.value

    deleteButton.addEventListener('click', (event)=> {
      //define the parent == list
      //call .remove on list
      deleteButton.parentNode.remove() 
    })
  })
});

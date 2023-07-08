

//creates new form to be submitted
//submission counter prevents multiple clicks 
let form = document.querySelector('form')
let submission = 0 
form.addEventListener('submit', (e) => {
  e.preventDefault()

  let textEntered = e.target['new-task-description'].value
if(textEntered != '' && submission === 0 ){
  dropDown(textEntered)
  submission =1
} 

form.reset()

})



//builds the todo list and lists the urgent ones at the top
function buildToDo(toDo, b){
  
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  
  if( b === 'Urgent'){
  p.style.color = 'red'
  } else if( b === 'Not Urgent'){
  p.style.color = 'grey'
  }
  
  p.textContent = `${toDo }  `
  p.appendChild(btn)
  
  if(p.style.color === 'red'){
    document.querySelector('#tasks1').appendChild(p)
  }else{
    document.querySelector('#tasks2').appendChild(p)
  }
 
  submission = 0

}


//delets the task
function handleDelete(e){
  e.target.parentNode.remove()

}



//dropdown selection with two options 
function dropDown(text){

let div1 = document.createElement('div')


form.appendChild(div1)
const selection = document.createElement('selector')

selection.setAttribute('id', 'selectUrgency', 'value', 'selectOne')

div1.appendChild(selection)
selection.style = 'float: right'


let opt1 = document.createElement('option')

opt1.textContent = 'Urgent'

let opt2 = document.createElement('option')
opt2.textContent = 'Not Urgent'

selection.appendChild(opt1)
selection.appendChild(opt2)

opt1.addEventListener('mouseover',  function handleMouseOver() {
  opt1.style.color = 'red';
})
opt1.addEventListener('mouseout',  function handleMouseOver() {
  opt1.style.color = 'black';
})

opt2.addEventListener('mouseover',  function handleMouseOver() {
  opt2.style.color = 'grey';
})
opt2.addEventListener('mouseout',  function handleMouseOver() {
  opt2.style.color = 'black';
})


opt1.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('opt1')

  buildToDo(text, 'Urgent')

  
div1.remove()
form.reset()

})

opt2.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('opt2')

  buildToDo(text, 'Not Urgent')
 
 div1.remove()
 form.reset()
})

submission = 1
}




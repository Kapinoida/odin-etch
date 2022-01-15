function buttonChoice () {
  do{
    var selection = parseInt(window.prompt("Please enter a number from 1 to 100", ""), 10);
  }while(isNaN(selection) || selection > 100 || selection < 1);
  return(selection)
}

function removeChildren(parent) {
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

const container = document.querySelector('#container');

for(let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('square');
  div.addEventListener('mouseenter', function(e) {
    e.target.classList.add('active')
  })
  container.appendChild(div);
}

const squares = document.querySelectorAll('.square')
const button = document.querySelector('button');
button.addEventListener('click', function (e) {
  squares.forEach(square => square.classList.remove('active'))
  let choice = buttonChoice()
  let widthPercent = 100/choice
  console.log(widthPercent)
  removeChildren(container)
  for(let j = 0; j < (choice * choice); j++) {
    const div = document.createElement('div');
  div.classList.add('square');
  div.style.cssText = 'width:' + widthPercent + '%; padding-bottom:' + widthPercent + '%;';
  div.addEventListener('mouseenter', function(e) {
    e.target.classList.add('active')
  })
  container.appendChild(div);
  }
})

// const square = document.querySelector('.square');
// document.querySelector('.square').addEventListener('mouseenter', function(e) {
//   console.log(e)
//   if(e.target.classList.contains('square')) {
//     e.target.classList.add('active')
//     console.log('activeS')
//   }
// })
// square.addEventListener('click', function (e) {
//   e.target.classList.add('active')
//   console.log('avtive')
// })
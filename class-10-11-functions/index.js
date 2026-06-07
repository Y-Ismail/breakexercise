const result = document.querySelector('div')
// const reset = document.getElementById('reset')

function display(input){
    result.textContent += input
}

function reset(){
    result.textContent = ''
}

function calculate(){
    result.textContent = eval(result.textContent)
}


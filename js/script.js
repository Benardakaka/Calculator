 class calculator {
constructor(previousOperandTextElentButton, currentOperandTextElentButton) {
    this.previousOperandTextElentButton = previousOperantTextElentButton
    this.currentOperandTextElentButton = currentOperandTextElentButton
    this.clear()
}
clear() {
this.currentOperand = ""
this.previousOperand = ""
this.operation = undefined
}
delete() {

}
appendNumber(number) {
    
this.currentOperand = this.currentOperand.tostring() + number.tostring()
}
chooseOperation(operation) {

}
compute() {
}
    updateDisplay() {
    this.currentOperantTextElentButton.innerText = this.curruntOperand
    }

}


const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperandTextElentButton = document.querySelector("[data-previous-operand]")
const currentOperandTextElentButton = document.querySelector("[data-current-operand]")

const calculator = new calculator(previousOperandTextElentButton, currentOperandTextElentButton)
numberButtons.forEach(button => {
button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
})
})
// getElementById, getElementByTagName, querySelector
const button = document.querySelector('#msg-button')

button.addEventListener('click', event => {
	console.log('Button clicked')
	const msgElement = document.querySelector('.message')
	msgElement.innerHTML += `<br> Button clicked!`
})
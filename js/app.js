const button = document.querySelector('button')
const alertMsg = document.querySelector('.alert')
const closeBtn = document.querySelector('.close-btn')

const showAlert = () => {
    alertMsg.classList.remove('hide')
    alertMsg.classList.add('show')
    alertMsg.classList.add('showAlert')

    setTimeout(hideAlert, 5000)
}

const hideAlert = () => {
    alertMsg.classList.remove('show')
    alertMsg.classList.add('hide')
}

button.addEventListener('click', showAlert)
closeBtn.addEventListener('click', hideAlert)
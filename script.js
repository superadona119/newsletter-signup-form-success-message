const succesCard = document.querySelector('.card__container')
const card = document.querySelector('.card')
const email = document.querySelector('.field__input')
const fieldErr = document.querySelector('.field__error')


const btn = document.querySelector('.form__button').addEventListener('click', () => {
    if (email.checkValidity()) {
        succesCard.classList.remove('inactive')
        card.classList.add('inactive')
    } 
    else {
        fieldErr.classList.remove('inactive')
        email.classList.add('error')
    }
})
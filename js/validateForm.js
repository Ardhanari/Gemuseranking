const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const phone = document.getElementById('phone')
const email = document.getElementById('email')

const form = document.getElementById('contactform')

const errorMsgs = document.getElementById('errormsgs')

form.addEventListener('submit', (e) => {
    let messages = []

    if (fname.value === '' || fname.value == null || lname.value === '' || lname.value == null) {
        messages.push('Both first and last name are required.')
    }

    if (! /^\+[0-9]+$/.test(phone.value)) {
        messages.push('Phone number must be valid.')
    }

    if (! /^\S+@\S+[\.][0-9a-z]+$/.test(email.value)) {
        messages.push('Email adrress must be valid.')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorMsgs.innerText = messages.join("\n")
    }
})
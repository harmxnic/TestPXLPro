const lineOn = document.querySelector('.line_on')
const lineOff = document.querySelector('.line_off')
const range = document.querySelector('#range')
const counter = document.querySelector('.reg-form__range_count')
const dropdownTitle = document.querySelector('.dropdown')
const dropdownMenu = document.querySelector('.dropdown__menu')
const img = document.querySelector('#img')
const city = document.querySelector('#city')
const word = document.querySelector('#word')
const tel = document.querySelector('#tel')
const name = document.querySelector('#name')
const comment = document.querySelector('#comment')
const send = document.querySelector('.reg-form__privacy_btn')
const labelName = document.querySelector('.label-name')
const labelTel = document.querySelector('.label-tel')
const labelComment = document.querySelector('.label-comment')

name.addEventListener('input', e => {
    if (name.value) {
        labelName.style.display = 'block'
    } else {
        labelName.style.display = 'none'
    }
})

comment.addEventListener('input', e => {
    if (comment.value) {
        labelComment.style.display = 'block'
    } else {
        labelComment.style.display = 'none'
    }
})

tel.addEventListener('input', e => {
    if (tel.value[0] === '+') {
        if (tel.value.length > 12) {
            tel.value = tel.value.slice(0, -1)
        }
    } else {
        if (tel.value.length > 11) {
            tel.value = tel.value.slice(0, -1)
        }
    }
    if (tel.value) {
        labelTel.style.display = 'block'
    } else {
        labelTel.style.display = 'none'
    }
})

tel.addEventListener('change', e => {
    let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/

    if (!regex.test(tel.value)) {
        tel.classList.add('invalid')
    } else {
        tel.classList.remove('invalid')
    }
})

lineOff.addEventListener('click', e => {
    lineOn.classList.add('on')
})

lineOn.addEventListener('click', e => {
    lineOn.classList.remove('on')
})

range.addEventListener('input', e => {
    counter.innerHTML = `${range.value} &#8381;`
    let val = range.value / 100
    range.style.background = `-webkit-linear-gradient(left, #FF7777 0%, #FF7777 ${val}%, #797979 ${val}%, #797979 100%)`
})

dropdownTitle.addEventListener('click', e => {
    img.classList.toggle('rotate-180')
    city.classList.add('up')
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none'
    } else {
        dropdownMenu.style.display = 'block'
        if (word.innerHTML.length === 0) {
            dropdownMenu.style.marginTop = '53px'
        } else {
            dropdownMenu.style.marginTop = '20px'
        }
    }
})

send.addEventListener('click', e => {
    const section = document.querySelector('.reg-form')
    const sectionThanks = document.querySelector('.thanks')
    section.style.display = 'none'
    sectionThanks.style.display = 'flex'
})

for (let i = 0; i < cities.length; i++) {
    dropdownMenu.insertAdjacentHTML('beforeend', `<div class="option">${cities[i]}</div>`)
}
const options = document.querySelectorAll('.option')

for (let i = 0; i <= options.length; i++) {
    options[i].addEventListener('click', e => {
        word.innerHTML = cities[i]
    })
}

function deRequireCb(elClass) {
    let el = document.getElementsByClassName(elClass)

    let atLeastOneChecked = false
    for (let i = 0; i < el.length; i++) {
        if (el[i].checked === true) {
            atLeastOneChecked = true
        }
    }

    if (atLeastOneChecked === true) {
        for (let i = 0; i < el.length; i++) {
            el[i].required = false
        }
        send.classList.add('btn-light')
    } else {
        for (let i = 0; i < el.length; i++) {
            el[i].required = true
        }
        send.classList.remove('btn-light')
    }
}


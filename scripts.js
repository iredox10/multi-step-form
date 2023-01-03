const pages = [...document.querySelectorAll(".wrapper .steps")];
const steps = [...document.querySelectorAll(".step")];
const nextBtn = [...document.querySelectorAll(".navigation button")];
const formInput = [...document.querySelectorAll('form input')]
const err = document.querySelectorAll('.error')
const form = document.forms[0]

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

nextBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('go-back')) {
            alert('go ')
        }
        if (btn.classList.contains('next-step')) {
            formInput.map(inpt => {
                
            })
            const button = btn.parentElement
            const prev = button.parentElement
            const elem = prev.parentElement
            const parent = elem.parentElement
            const nextElem = parent.nextElementSibling
            parent.classList.remove('acticated')
            parent.style.display = 'none'
            nextElem.classList.add('activated')
            console.log(elem,nextElem)
        }

    })
})

function validate(elements) {
    elements.forEach(elm => {
        if (elm.value === '') {
            alert('elm')
        }
    })
}
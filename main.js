let ham = document.querySelector('.fa-bars')

ham.addEventListener('click', function() {
    document.querySelector('.hamburger-menu').classList.add('active')
})

let cross = document.querySelector('.close')
console.log(cross)
cross.addEventListener('click', function() {
    document.querySelector('.hamburger-menu').classList.remove('active')
})
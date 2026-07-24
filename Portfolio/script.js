// Dark mode

const toggle = document.getElementById("darkToggle")

toggle.onclick = () => {

document.body.classList.toggle("dark")

}


// scroll animation

const faders = document.querySelectorAll(".fade")

const appear = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show")

}

})

})

faders.forEach(el => appear.observe(el))
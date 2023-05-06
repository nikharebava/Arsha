
//  ......start................for abous us accordion..........................................

const arrow = Array.from(document.getElementsByClassName('arrow'))
const ps = Array.from(document.getElementsByClassName('p'))
const mainps = Array.from(document.getElementsByClassName('accordion'))

for( let i = 0; i < mainps.length; i++ ){
    mainps[i].addEventListener('click', () =>{
        ps.map((element)=>{
            if (element !== mainps[i].nextElementSibling)
            element.classList.add('hidden')
        })
        arrow.forEach(arrow =>{
            if (mainps[i].childNodes[3] !== arrow){
                arrow.classList.remove('deg')
            }
        })
        mainps[i].childNodes[3].classList.toggle('deg')
        mainps[i].nextElementSibling.classList.toggle('hidden')
    })
}

//  ......end................for abous us accordion..........................................
//  ......start................Navbar drop down..........................................

const navbar = document.getElementById('navbar')
const slide = document.getElementById('slide')
navbar.addEventListener('click', ()=>{
slide.classList.toggle('hidden')
})

//  ......end................Navbar drop down..........................................

//  ......start................portfolioimg hovers..........................................

const portfolioimgs = Array.from(document.getElementsByClassName('portfolioimg'))

portfolioimgs.forEach(Element =>{
    Element.addEventListener('mouseenter', ()=>{
        Element.childNodes[3].classList.toggle('hidden') 
    })
  })

//  ......end................portfolioimg hovers..........................................

//  ......start................portfolioimg filters..........................................

const appimg = Array.from(document.getElementsByClassName('app'))
const cardimg = Array.from(document.getElementsByClassName('card'))
const webimg = Array.from(document.getElementsByClassName('web'))
const all = document.getElementById('all')



const app = document.getElementById('app')
app.addEventListener('click',()=>{
    portfolioimgs.map(Element => {
        Element.classList.add('hidden')
    })
    appimg.map(Element =>{
        Element.classList.remove('hidden')
    })
})
const card = document.getElementById('card')
card.addEventListener('click',()=>{
    portfolioimgs.map(Element => {
        Element.classList.add('hidden')
    })
    cardimg.map(Element =>{
        Element.classList.remove('hidden')
    })
})

const web = document.getElementById('web')
web.addEventListener('click',()=>{
    portfolioimgs.map(Element => {
        Element.classList.add('hidden')
    })
    webimg.map(Element =>{
        Element.classList.remove('hidden')
    })
})
all.addEventListener('click', ()=>{
    portfolioimgs.map(Element=>{
        Element.classList.remove('hidden')
    })
})

//  ......end................portfolioimg filters..........................................


//  ......start................for questions accordion..........................................


const askp = Array.from(document.getElementsByClassName('askp'))
const questions = Array.from(document.getElementsByClassName('question'))
const askedarrow = Array.from(document.getElementsByClassName('askedarrow'))

questions.forEach(element => {
    element.addEventListener('click',()=>{
        console.log(element.childNodes[3])
        askp.forEach(sib =>{
            if (element.nextElementSibling !== sib){
                sib.classList.add('hidden')
            }
        })
        askedarrow.forEach(arrow =>{
            if (element.childNodes[3] !== arrow){
                arrow.classList.remove('deg')
            }
        })
        element.nextElementSibling.classList.toggle('hidden')
        element.childNodes[3].classList.toggle('deg')
    })
})


//  ......end................for questions accordion..........................................


// 








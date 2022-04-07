let btn = document.querySelector('.magic-button')
let brief = document.querySelector('.brief-paragraph')

let briefs = ['Design a landing page for a product you want to buy.', 'Design an icon set based on your favorite movie.', 'Design a landing page dedicated to your favorite writer.', 'Design a landing page for a politician you support.', 'Redesign the artwork of your favorite album ever.', 'Design screens for an app that lets people collaborate on writing.', 'Design a landing page for a bike.', 'Design a landing page for a politician you support.', 'Design an app that controls a smart home.', 'Design a mobile messaging app.', 'Redesign your favorite restaurant\'s website.', 'Redesign your go-to design app.', 'Design a landing page for a car.']

let index = 0

btn.addEventListener('click', ()=> {
    index++
    brief.textContent = briefs[index]
    if(index === briefs.length -1) {
        index = 0
    }
})

// function move() {
//     let elem = document.querySelector('.psst-block')
//     let pos = 10
//     flag = true;
//     let id = setInterval(frame, 10)
    
//     function frame() {
//         if(pos === 20 ) {
//             clearInterval(id)
//         } else {
//             pos+=1
//             elem.style.transform = `translate3d(0px, ${pos}px, 0px)`
//         }
//     }
    
   
// }

// move()
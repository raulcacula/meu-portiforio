const myObserver = new IntersectionObserver((efeito) => {
    efeito.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('shox')
        }
    })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach( (element) => myObserver.observe(element))



const box = document.querySelector('div.container')
const imgs = document.querySelectorAll('div.container img')
let cont = 0

function slide(){
    cont++

    if(cont > imgs.length - 1){
        cont = 0
    }
    box.style.transform = `translateX(${-cont * 800}px)`
}
setInterval(slide,2000)


var img1 = "insta.png" 
var img2 = "gitlogo.png"
function seta(){
     document.getElementById("imagem-slider").src = img1
     var aux = img1
     img1 = img2
     img2 = aux
  }

  const carrossel = document.querySelector('#container')
  const imagems = document.querySelectorAll('#container img')
  let contando = 0

  function slide2(){
    contando++

    if(contando > imagems.length - 1 ){
        contando = 0

    }
    carrossel.style.transform = `translateX(${-contando * 100}%)`
  }
  setInterval(slide2,2000)

  let back = document.querySelector('#background')
  window.addEventListener('scroll', function(){
    let value = 1 + this.window.screenY/-600
    back.style.opacity = value
  })


  var up = document.getElementById('up')

  up.addEventListener('click', () =>{
    window.scroll({top:100,innerWidth,behavior:"smooth"})
  })


  var low = document.getElementById('low')

  low.addEventListener('click', () =>{
    window.scroll({top:innerHeight,behavior:"smooth"})
  })

  var soc = document.getElementById('redes')

  soc.addEventListener('click', () =>{
    window.scroll({top:4000, innerHeight,behavior:"smooth"})
  })

  var smim = document.getElementById('item-3')

  smim.addEventListener('click', () =>{
    window.scroll({top:1500, innerHeight,behavior:"smooth"})
  })
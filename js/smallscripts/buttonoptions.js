let buttontext = document.querySelector('.buttonclass h1')
let cardstext=document.querySelector('.cardsclass h1')
let navbartext=document.querySelector('.navbarclass h1')
let textareatext=document.querySelector('.textareaclass h1')
let imageareatext=document.querySelector("#imageareatext")
buttontext.addEventListener('click',()=>
{
    //console.log("man")
    displayoptionsfunction(buttonoptionsarray,3,'buttons')
    init('buttons')
   
})
cardstext.addEventListener('click',()=>
{
 //   console.log("card clickec ",cardoptionsarray)
    displayoptionsfunction(cardoptionsarray,2,'cards')
    init('cards')
})

navbartext.addEventListener('click',()=>
{
    console.log("mmm --------- ",navbaroptionsarray);
    displayoptionsfunction(navbaroptionsarray,2,'navbars')
    init('navbars')
})
textareatext.addEventListener('click',()=>
{
    init('textareas')
})
imageareatext.addEventListener('click',()=>
{
    init('images')
})




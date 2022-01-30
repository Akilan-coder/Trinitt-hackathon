
let dragstart=(e)=>
{
    
   
   
}
let dragend=(e,component)=>
{
    e.preventDefault()
    if(component=='buttons')
    {
        if(e.y>450)
        {
            return 
        }
            console.log("drag drop ",e)
            
            let element = document.createElement('div')
            element.className=e.target.className
            element.id=(Math.random()*1000).toString()
          element.innerText="SAMPLE"  
            element.style.position='absolute'
            element.style.left=e.x.toString()+"px"
            element.style.top=e.y.toString()+"px"
            element.setAttribute('draggable',true)
            element.addEventListener('dragend',(ee)=>{
              //  console.log("event ",ee)
            ee.preventDefault()
        
            if(ee.y>450)
            {
                return 
            }
           
          let newelement =document.getElementById(ee.target.id)
         console.log(document.getElementsByClassName(ee.target.className))
            newelement.style.left=ee.x.toString()+"px"
            newelement.style.top=ee.y.toString()+"px"
        //console.log(ee)
        })
            
            let canvas = document.querySelector('.websitecanvas')
            canvas.appendChild(element)
           
            console.log(element)
    }
    if(component=='cards')
    {
        console.log("inside mane  -----   ",e)
        if(e.y>450)
        {
            return 
        }
        let element = document.createElement('div')
        element.innerHTML=e.target.innerHTML
        element.id=(Math.random()*1000).toString()
     // element.innerText="SAMPLE"  
        element.style.position='absolute'
        element.style.left=e.x.toString()+"px"
        element.style.top=e.y.toString()+"px"
        element.style.width="20rem"
        element.style.border="1px black solid"
        element.setAttribute('draggable',true)
     //   console.log(element)
        element.addEventListener('dragend',(ee)=>{
          //  console.log("event ",ee)
        ee.preventDefault()
    
        if(ee.y>450)
        {
            return 
        }
       
      let newelement =document.getElementById(ee.target.id)
     console.log(document.getElementsByClassName(ee.target.className))
        newelement.style.left=ee.x.toString()+"px"
        newelement.style.top=ee.y.toString()+"px"
        
    //console.log(ee)
    })
        
        let canvas = document.querySelector('.websitecanvas')
        canvas.appendChild(element)
    }
if(component=='navbars')
{
    console.log("inside mane  -----   ",e)
        if(e.y>450)
        {
            return 
        }
        let element = document.createElement('div')
        console.log("bruh bruh burh",e.target)
        let tempdiv=document.createElement('div')
        e.target.id=(Math.random()*1000).toString()
        tempdiv.appendChild(e.target)
        element.innerHTML=tempdiv.innerHTML
        tempdiv.remove()
        console.log("elemental damage ",element)
       
     // element.innerText="SAMPLE"  
        element.style.position='absolute'
        element.style.left=e.x.toString()+"px"
        element.style.top=e.y.toString()+"px"
    // console.log(e.target.innerHTML)
        element.setAttribute('draggable',true)
     //   console.log(element)
        element.addEventListener('dragend',(ee)=>{
            console.log("event ",ee)
        ee.preventDefault()
    
        if(ee.y>450)
        {
            return 
        }
       
      let newelement =document.getElementById(ee.target.id)
     console.log("new element   ",newelement)
        newelement.style.left= (ee.offsetX).toString()+"px"
        newelement.style.top= (ee.offsetY).toString()+"px"

        
    //console.log(ee)
    })
        
        let canvas = document.querySelector('.websitecanvas')
        canvas.appendChild(element)
}

   
}
let dragdrop=(e)=>
{ 
    // console.log("drag drop")
   
    // console.log("drag ended ",e)
    // e.target.style.position='absolute',
    // console.log(e.screenX)
    // e.target.style.position.top=e.screenX
    // e.target.style.position.left=e.screenY
}
let dragover=(e)=>
{ e.preventDefault()
   
}
let dragenter=(e)=>
{ e.preventDefault()
 
}
let dragleave=(e)=>
{ e.preventDefault()
   
}
let init=(component)=>
{

  
    let buttonvalue=document.querySelector("#modalsavebutton")
    if(buttonvalue.hasAttribute("active"))
    {

    }
    else
    {
        buttonvalue.addEventListener("click",()=>
        {
            buttonvalue.setAttribute('active',true)
            let  inputvalue=document.querySelector("#imageurlid").value
            if(inputvalue)
            {
                let image=document.createElement("img")
                image.src=inputvalue
                image.style.border="2px solid red"
                image.id=(Math.random()*1000).toString()
                image.setAttribute('draggable',true)
                image.addEventListener('dragend',(e)=>
                {
                    let element = document.getElementById(e.target.id)
element.style.position='absolute'
element.style.top=(e.y).toString()+"px"
element.style.left=(e.x).toString()+"px"
                })
                let canvas = document.querySelector("#websitecanvasid")
                canvas.appendChild(image)
            }
            else
            {
    
            }
        })
    }
   
  
    

if(component=="textareas")
{
    console.log("it is truth ");

    // let maindiv=document.createElement('div')
    // maindiv.className='comp'
    // maindiv.id='comp'
    // let nediv=document.createElement('div')
    // nediv.className='resizer ne'
    // let nwdiv=document.createElement('div')
    // nwdiv.className='resizer nw'
    // let swdiv=document.createElement('div')
    // swdiv.className='resizer sw'
    // let sediv = document.createElement('se')
    // sediv.className='resizer se'
    // let content = document.createElement('div')
    // maindiv.appendChild(nediv)
    // maindiv.appendChild(nwdiv)
    // maindiv.appendChild(swdiv)
    // maindiv.appendChild(sediv)
    // maindiv.appendChild(content)
    // let canvas=document.getElementById('websitecanvasid')
    // canvas.appendChild(maindiv)
















    
//     let textareadiv=document.createElement("div")
//     textareadiv.style.border="black 2px solid"
//     textareadiv.style.width="5rem"
//     textareadiv.style.height="5rem"
//     textareadiv.setAttribute('draggable',true)
//     textareadiv.setAttribute('visibility',true)
//     textareadiv.id=(Math.random()*1000).toString()

//     textareadiv.addEventListener('click',(e)=>
//     {
//         let textareadivs=document.createElement("div")
//      textareadivs.className='comp'
//      textareadivs.id="comp"
//      let text=document.getElementById(e.target.id)
//      console.log(document.getElementById(e.target.id).getAttribute('visibility'));     
//      if(document.getElementById(e.target.id).getAttribute('visibility'))
          
//           {
//               console.log("on")
//              let nediv=document.createElement("div")

// nediv.className="resizer ne"
// textareadivs.appendChild(text)
// textareadivs.appendChild(nediv)
// let nwdiv=document.createElement("div")
// nwdiv.className="resizer nw"
// textareadivs.appendChild(nediv)
// let swdiv=document.createElement("div")
// swdiv.className="resizer sw"
// textareadivs.appendChild(nediv)
// let sediv=document.createElement("div")
// sediv.className="resizer se"
// //dialogelementtextarea.appendChild(document.createElement('div').className)
// textareadivs.appendChild(sediv)
// console.log(e.target.id);
// let samplevar=document.getElementById(e.target.id)
// samplevar.setAttribute('visibility',false)
// document.getElementById('websitecanvasid').appendChild(textareadivs) 

//           }
//           else
//           {
//               console.log("off");
              

// textareadivs.appendChild(textareadiv)
//           }

//     })
//    let websitecanvas = document.getElementById('websitecanvasid')
// textareadiv.addEventListener('dragend',(e)=>
// {
// let element = document.getElementById(e.target.id)
// element.style.position='absolute'
// element.style.top=(e.y).toString()+"px"
// element.style.left=(e.x).toString()+"px"
// })
// console.log("hit it man ");
// // let dialogelementtextarea=document.createElement('div')
// // dialogelementtextarea.className="comp"
// // dialogelementtextarea.id="comp"
// // dialogelementtextarea.appendChild(textareadiv)
// // let nediv=document.createElement("div")
// // nediv.className="resizer ne"

// // dialogelementtextarea.appendChild(nediv)
// // let nwdiv=document.createElement("div")
// // nwdiv.className="resizer nw"
// // dialogelementtextarea.appendChild(nediv)
// // let swdiv=document.createElement("div")
// // swdiv.className="resizer sw"
// // dialogelementtextarea.appendChild(nediv)
// // let sediv=document.createElement("div")
// // sediv.className="resizer se"
// // //dialogelementtextarea.appendChild(document.createElement('div').className)
// // dialogelementtextarea.appendChild(sediv)
// websitecanvas.appendChild(textareadiv)


}


if(component=='buttons')
{
    // buttonoptionsarray.forEach((obj)=>
    // {
        
    //     obj.removeEventListener('dragstart',dragstart)
    //     obj.removeEventListener('dragend',dragend)
    //     obj.removeEventListener('drop',dragdrop)
    //     obj.removeEventListener('dragover',dragover)
    //     obj.removeEventListener('dragenter',dragenter)
    //     obj.removeEventListener('dragleave',dragleave)
    // })
    buttonoptionsarray.forEach((obj)=>
    {
       // console.log(dragend)
        
        obj.addEventListener('dragstart',(e)=>{dragstart(e,component)})
        obj.addEventListener('dragend',(e)=>{dragend(e,component)})
        obj.addEventListener('drop',(e)=>{dragdrop(e,component)})
        obj.addEventListener('dragover',(e)=>{dragover(e,component)})
        obj.addEventListener('dragenter',(e)=>{dragenter(e,component)})
        obj.addEventListener('dragleave',(e)=>{dragleave(e,component)})
    })
}
if(component=="cards"||component=="navbars")
{
    columndivs.forEach((obj)=>
    {
        console.log(obj,"  m an man m man   ")
        obj.addEventListener('dragstart',(e)=>{dragstart(e,component)})
        obj.addEventListener('dragend',(e)=>{dragend(e,component)})
        obj.addEventListener('drop',(e)=>{dragdrop(e,component)})
        obj.addEventListener('dragover',(e)=>{dragover(e,component)})
        obj.addEventListener('dragenter',(e)=>{dragenter(e,component)})
        obj.addEventListener('dragleave',(e)=>{dragleave(e,component)})
    })
}


}
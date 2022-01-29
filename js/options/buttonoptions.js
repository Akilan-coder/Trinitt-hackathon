

let buttonoptionsarray=[]
let buttonoptionsclassarray=["btn btn-primary","btn btn-secondary","btn btn-success","btn btn-danger","btn btn-warning","btn btn-light","btn btn-info","btn btn-dark"]
for(let i=0;i<buttonoptionsclassarray.length;i++)
{
    let buttonoptiondiv=document.createElement('button')
    
    buttonoptiondiv.className=buttonoptionsclassarray[i]
    buttonoptiondiv.innerText="SAMPLE"
   buttonoptionsarray.push(buttonoptiondiv)
}
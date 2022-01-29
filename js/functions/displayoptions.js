let columndivs=[]  
let displayoptionsfunction=(options,perrow,component)=>
{
   
if(document.querySelector("#optioncontainerid"))
{
    document.querySelector("#optioncontainerid").remove()
    columndivs=[]
}
   let optiondiv=document.querySelector(".optionbar")

     let containerdiv=document.createElement('div')
     containerdiv.className='container'
     containerdiv.id='optioncontainerid'
console.log("inside display---   ",options)

    perrow=12/perrow;
     let rowdiv=document.createElement('div');
     rowdiv.className='row'
     let columndiv;
     for(let i=0;i<options.length;i++)
     {
         columndiv=document.createElement('div')
         columndiv.className='col-'+perrow.toString()
        columndiv.style='margin-top:10px;margin-bottom:10px'
        if(component=="buttons")
        {
            columndiv.appendChild(options[i])
            console.log(options[i])
         
        }
        else
        {
columndiv.innerHTML=options[i]
   columndivs.push(columndiv)
        }
        console.log('beefore---- ',options[i])
        
        
         rowdiv.appendChild(columndiv)

    //       if(i%3==0)
    //       {
    //         //  console.log(i)
    //           if(rowdiv)
    //           {
                  
    //             rowdiv.remove()
               
    //           }
    //           else
    //           {
    //             rowdiv=document.createElement('div')
    //             rowdiv.className='row'
                
                   
                   
                
                  
    //           }
    //       }
    //       if(rowdiv ) 
    //       {
    //           columndiv=document.createElement('div')
    //           columndiv.className='col'
    //           columndiv.appendChild(options[i])
    //           rowdiv.appendChild(columndiv)
    //           console.log("row div ",rowdiv);
              
                  
              
    //       }
    //       if(i%3==2)
    //               {
    //              //     console.log(rowdiv,options);
    //                //  optiondiv.appendChild(rowdiv)   
    //               }
    //   //   optiondiv.appendChild(options[i])
     }
     containerdiv.appendChild(rowdiv)
     optiondiv.appendChild(containerdiv)
     console.log("comatainer mane ",containerdiv)
}
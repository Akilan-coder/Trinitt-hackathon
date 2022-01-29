let cardoptionsarray=[]
let cardoptionsclassarray=[`<div class="card" draggable="true" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`,`<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`,`<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`]
for(let i=0;i<cardoptionsclassarray.length;i++)
{
    let buttonoptiondiv=document.createElement('div')
    console.log("cards added")
    
    buttonoptiondiv.innerHtml=cardoptionsclassarray[i]
    buttonoptiondiv.id=i
    buttonoptiondiv.setAttribute('draggable',true);
    cardoptionsarray.push(cardoptionsclassarray[i])
}
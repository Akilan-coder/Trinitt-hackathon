





let slider = document.getElementById('myRange');
let right = document.getElementById('right');
let left = document.getElementById('left');
let centre = document.getElementById('centre');
let bslider = document.getElementById('boxshape');
let textedit = document.getElementById('innertext');

let boxh = document.getElementById('YRange');
let boxw = document.getElementById('XRange');

textedit.oninput = function(){
    console.log("isit")
    el.innerHTML = textedit.value;
    }





right.onclick = ()=>{
    el.style.textAlign = "right";
}
left.onclick = ()=>{
    el.style.textAlign = "left";
}
centre.onclick = ()=>{
    el.style.textAlign = "center";
}

// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'

    swatches: [
        '#333333'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
          
            input: true,
            clear: true,
            save: true
        }
    }
});

pickr.on('init', instance => {
   
}).on('change', (color, instance) => {
    const rgbacolor = color.toRGBA().toString();
    console.log('Event: "change"', color,instance);
    el.style.backgroundColor = rgbacolor;
})




     

                    
    console.log(slider.value);

    const fpickr = Pickr.create({
        el: '.font-color-picker',
        theme: 'classic', // or 'monolith', or 'nano'
    
        swatches: [
            '#333333'
        ],
    
        components: {
    
            // Main components
            preview: true,
            opacity: true,
            hue: true,
    
            // Input / output Options
            interaction: {
                hex: true,
                rgba: true,
              
                input: true,
                clear: true,
                save: true
            }
        }
    });
    
    fpickr.on('init', instance => {
       
    }).on('change', (color, instance) => {
        const rgbacolor = color.toRGBA().toString();
        console.log('Event: "change"', color,instance);
        el.style.color = rgbacolor;
    })

slider.oninput = function(){
        console.log("works");
        el.style.fontSize = parseInt(slider.value) + "px";
        }
        
bslider.oninput = function(){
            console.log("works");
            el.style.borderRadius = parseInt(bslider.value) + "%";
            }    

boxh.oninput = function(){
                console.log("works");
                el.style.height = parseInt(boxh.value) + "px";
                }
                
boxw.oninput = function(){
                    console.log("works");
                    el.style.width = parseInt(boxw.value) + "px";
                    }            
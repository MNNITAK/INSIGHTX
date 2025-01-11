

// let y=prompt("enter your age")
// let z = document.getElementById("PG2"); // Get the element by its ID
// function f() {
//     z.style.backgroundColor = "red"; // Change the background color to red
// }
// z.addEventListener('click', f); // Attach the event listener for the 'click' event

// Initialize Lenis
const lenis = new Lenis({

    duration:1.2
});

// Use requestAnimationFrame to colntinuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
raf();

var pos = document.documentElement; // Correctly accessing the root element
pos.addEventListener("mousemove", (e) => {
    pos.style.setProperty("--x", e.clientX + "px");
    pos.style.setProperty("--y", e.clientY + "px");
});


// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    var sb = document.getElementsByClassName("sidebar")[0];
    // var featureElement = document.getElementById("featuretext");

    // Check if the elements exist before proceeding
    if (!sb) {
        console.error("Sidebar element not found!");
        return;
    }

    // if (!featureElement) {
    //     console.error("FEATURE element not found!");
    //     return;
    // }
 let count=0;
    // Add the click event listener to the sidebar
    sb.addEventListener("click", () => {
        // Remove the element with id "FEATURE"
        // featureElement.remove();  // Removes the element
      
        // Add the "sidebar2" class to the sidebar
        if(count==0){
            sb.classList.add("sidebar2");
            // Assuming sb is the correct reference to your sidebar container
           sb.innerHTML = `
               
                   <ul>
                       <li><a href="#"><h3>CPI GENERATOR</h3></a></li>
                       <li><a href="#"><h3>ATTENDANCE TRACKER</h3></a></li>
                       <li><a href="#"><h3>3D MODEL OF COLLEGE</h3></a></li>
                       <li><a href="#"><h3>LOGIN</h3></a></li>
                       <li><a href="#"><h3>CLASS SCHEDULE</h3></a></li>
                   </ul>
               
           `;
        setTimeout(()=>{
            sb.classList.remove("sidebar2");
             sb.innerHTML=``
        },3000)
         count=1;
        }
        else {
            sb.classList.remove("sidebar2");
            sb.innerHTML=``
            count=0;


        }
        
    });
});

let page=document.getElementsByClassName("PG1")[0];
let cursor=document.getElementsByClassName("cursor")[0];
page.addEventListener("mousemove",(e)=>{
   gsap.to(cursor,{
    x:e.clientX,y:e.clientY,
    duration:1,
    ease:"back.out"
    
   })

})
let home=document.getElementsByClassName('home')[0];
let contact=document.getElementsByClassName('contact')[0];
let about=document.getElementsByClassName('about')[0];



let mainclub=document.getElementsByClassName("mainclub")[0];
let clubimage=document.getElementsByClassName("clubimage")[0];
console.log(clubimage)
let clubs=document.querySelectorAll(".club");

mainclub.addEventListener("mouseenter",()=>{
    clubimage.style.display="block";

})

mainclub.addEventListener("mouseleave",()=>{
    clubimage.style.display="none";

})
clubs.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        let t=e.getAttribute("image")
        console.log(t)
        clubimage.style.backgroundImage=`url(${t})`

    })

})


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})












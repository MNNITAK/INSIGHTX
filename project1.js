

// let y=prompt("enter your age")
// let z = document.getElementById("PG2"); // Get the element by its ID
// function f() {
//     z.style.backgroundColor = "red"; // Change the background color to red
// }
// z.addEventListener('click', f); // Attach the event listener for the 'click' event



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
















/**
 * Try to manipulate the page
 * 
 * Easiest
 * 1) Get the title for each dog/cat services, and put them into the console using console.log
 * 2) Change the title of the page to "We're the CAT People"
 * 3) Change the main image to be something cat related.
 * 
 * 
 * Harder
 * 1) Replace the call to action button background color with "red"
 * 2) Find another image and replace the header (try unsplash.com, get familiar with searching for images)
 * 3) When someone clicks the "Book your next Rover sitter" button, change the text of the button to say "Thanks"
 * 
 * 
 * Hardest (only if you get the others first)
 * 1) Make the responsive menu work!
 * 2) Implement a modal window - "Sign up now" CTA when someone clicks the 'Sign Up' button
 */ 
 let ctabutton = document.querySelector("#rover-cta-button")

 ctabutton.addEventListener("mouseover", function(){
  ctabutton.style.backgroundColor = "red";
 })
 ctabutton.addEventListener("mouseout", function(){
     ctabutton.style.backgroundColor = "#138054";
    })
 
 ctabutton.addEventListener("click", function(){
   ctabutton.innerHTML ="Thanks!!"
   
 })
 
 document.querySelector("#mobile-menu-button").addEventListener("click", function(){
     document.querySelector("#mobile_menu").classList.add("show")
 })
 
 document.querySelector("#close").addEventListener("click", function(){
     document.querySelector("#mobile_menu").classList.remove("show")
 })
 
 let signupbtn1 = document.querySelector("#signup_web");
 let box =  document.querySelector("#box");
 let closebtn =  document.querySelector("#Cancel");
 let signupbtn = document.querySelector("#Signup");
 
 signupbtn1.addEventListener("click", function() {
     console.log(box.style.display = "block")
     
 })
 closebtn.addEventListener("click", function(){
     box.style.display = "none";
 })
 
 signupbtn.addEventListener("click", function() {
     box.style.display = "block";
     
 })
 
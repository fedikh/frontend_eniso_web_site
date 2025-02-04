console.log("welcome in web site:");

let navLink = document.getElementById("nav-links");

// showMenu finction:
function showMenu() {
    console.log("showMenu trigger:");
  navLink.style.right = "0";
}
// hideMenu function:
function hideMenu() {
    console.log("hideMenu trigger:");
  navLink.style.right = "-200px";
}
const counts = document.querySelectorAll('.count')
const speed = 97

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})

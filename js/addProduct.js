document.querySelector("#page1 form a").addEventListener("click", () => {
    document.querySelector("#page2").classList.add("activated");
    document.querySelector("#page1").classList.remove("activated");
    document.querySelector("#stepWizard nav a:nth-child(2)").classList.add("activated"); 
})

document.querySelector("#page2 form a").addEventListener("click", () => {
    document.querySelector("#page3").classList.add("activated");
    document.querySelector("#page2").classList.remove("activated");
    document.querySelector("#stepWizard nav a:nth-child(3)").classList.add("activated");
})

document.querySelector("#page3 form a").addEventListener("click", () => {
    document.querySelector("#page4").classList.add("activated");
    document.querySelector("#page3").classList.remove("activated");
})
document.querySelectorAll('.productCarousel li > a:first-child').forEach(d => {
    d.addEventListener('click', function() {
        let img = this.querySelector('img').getAttribute('src');
        document.querySelector('#productDetail img').setAttribute('src', img);
        document.body.classList.add('productExpand');
        
    })
})

document.querySelector('#productDetail figure a').addEventListener('click', () => {
    document.body.classList.remove('productExpand');
})

document.querySelector('#navButton').addEventListener('click', function(e) {
    document.querySelector("#topNav ul").classList.add('show');
    document.body.classList.add('productExpand');
})

document.querySelector("#topNav nav li:last-child").addEventListener('click', function(e) {
    document.querySelector("#topNav ul").classList.remove('show');
    document.body.classList.remove('productExpand');
    e.stopPropagation();
})

document.querySelector("#topNav a li:first-child").addEventListener("click", () => {
    window.location.href = "homePage.html";
})

document.querySelector("#logo svg").addEventListener("click", () => {
    window.location.href = "homePage.html";
})

document.querySelector("#topNav a li:nth-child(2)").addEventListener("click", () => {
    window.location.href = "addProduct.html";
})

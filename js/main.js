document.querySelectorAll('.productCarousel li > a:first-child').forEach(d => {
    d.addEventListener('click', function() {
        let img = this.querySelector('img').getAttribute('src');
        document.querySelector('#productDetail img').setAttribute('src', img);
        document.body.classList.add('productExpand');
        
    })
})

document.querySelector('#productDetail figure a').addEventListener('click', d => {
    document.body.classList.remove('productExpand');
})
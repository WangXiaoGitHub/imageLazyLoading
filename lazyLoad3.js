// intersectionObserve()
let imgs = document.getElementsByTagName("img");
let io = new IntersectionObserver(function (entries) {
    entries.forEach(item => {
        // console.log('tt:',item)
        let oImg = item.target;
        if (item.intersectionRatio > 0 && item.intersectionRatio <= 1) {
            oImg.setAttribute('src', oImg.getAttribute('data-url'))
        }
    })
})

Array.from(imgs).forEach(ele => io.observe(ele))
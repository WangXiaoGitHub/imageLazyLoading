// 滚动监听+scrollTop+offsetTop+innerHeight
let imgs = document.getElementsByTagName("img");
layzyLoad();

function layzyLoad () {
    // let pageWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let pageHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    for (let i = 0; i < imgs.length; i++) {
        let x = scrollTop + pageHeight - imgs[i].offsetTop;
        if (x > 0) {
            imgs[i].src = imgs[i].getAttribute('data-url')
            console.log(`img ${i} url is: ${imgs[i].src}`)
        }
    }
}

// 节流
function throttle (fn) {
    let timer = null
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                fn.call(this);
                timer = null;
            }, 200)
        }
    }
}


window.addEventListener("scroll", throttle(layzyLoad))
// window.onscroll = throttle(layzyLoad)
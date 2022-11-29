// 滚动监听+getBoundingClientRect
let imgs = document.getElementsByTagName("img");
layzyLoad();

function layzyLoad () {
    let pageHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    for (let i = 0; i < imgs.length; i++) {
        let rect = imgs[i].getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= pageHeight) {
            imgs[i].src = imgs[i].getAttribute('data-url')
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
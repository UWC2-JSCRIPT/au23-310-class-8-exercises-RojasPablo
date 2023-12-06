let rgb = 255;

let darkenBackground = setInterval(() => {
    if (rgb > 0) {
        rgb--;
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
    } else {
        clearInterval(darkenBackground);
    }
    }, 100
);

let x = 0;
const animate = function() {
    x++;
    if (x < window.innerWidth){
        const transform = `translateX(${x}px)`;
        imgEl.style.transform = transform;
        requestAnimationFrame(animate);
    }
}
requestAnimationFrame(animate)
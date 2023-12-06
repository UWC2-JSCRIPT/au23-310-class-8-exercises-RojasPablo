let RGB = 0;

const lightenBackground = ()=>{
    
    if (RGB <= 255){
        RGB++;
        const backgroundColor = `rgb(${RGB}, ${RGB}, ${RGB})`
        document.body.style.backgroundColor = backgroundColor;
        requestAnimationFrame(lightenBackground)
    }
}
requestAnimationFrame(lightenBackground);

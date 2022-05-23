function apply_style(ele, style) {
    Object.assign(ele.style, style);
}

const IMAGE_HEIGHT = "450px";
const IMAGE_WIDTH = "800px";

const gallery_style_init = [
    {
        visibility: "visible",
        width: `calc(${IMAGE_WIDTH} * 0.8 * 0.75)`,
        height: `calc(${IMAGE_HEIGHT} * 0.8 * 0.75)`,
        top: "0",
        left: "0",
        zIndex: "997",
        animationName: "unset",
        animationDuration: "1s",
    },
    {
        visibility: "visible",
        width: `calc(${IMAGE_WIDTH} * 0.8)`,
        height: `calc(${IMAGE_HEIGHT} * 0.8)`,
        top: "20px",
        left: "20%",
        zIndex: "998",
        animationName: "unset",
        animationDuration: "1s",
    },
    {
        visibility: "visible",
        width: `${IMAGE_WIDTH}`,
        height: `${IMAGE_HEIGHT}`,
        top: "55px",
        left: "30%",
        zIndex: "999",
        animationName: "unset",
        animationDuration: "1s",
    }
]

const gallery_styles_switching = [
    {
        width: `calc(${IMAGE_WIDTH} * 0.8 * 0.75)`,
        height: `calc(${IMAGE_HEIGHT} * 0.8 * 0.75)`,
        top: "0",
        left: "0",
        zIndex: "997",
        animationName: "fadeOutIn",
        animationDuration: "1s",
    },
    {
        width: `calc(${IMAGE_WIDTH} * 0.8)`,
        height: `calc(${IMAGE_HEIGHT} * 0.8)`,
        top: "20px",
        left: "20%",
        zIndex: "998",
        animationName: "unset",
        animationDuration: "1s",
    },
    {
        width: `${IMAGE_WIDTH}`,
        height: `${IMAGE_HEIGHT}`,
        top: "55px",
        left: "30%",
        zIndex: "999",
        animationName: "unset",
        animationDuration: "1s",
    }
]

window.addEventListener('load', () => {
    const images = document.querySelectorAll('#page-home-container .image');
    let rotate = 0;
    
    for (let i = 0; i < 3; i++) {
        apply_style(images[i], gallery_style_init[i]);
    }
    rotate = (rotate + 1) % 3;

    setInterval(() => {
        for (let i = 0; i < 3; i++) {
            apply_style(images[i], gallery_styles_switching[(i + rotate) % 3]);
        }
        rotate = (rotate + 1) % 3;
        
    }, 4000);
});
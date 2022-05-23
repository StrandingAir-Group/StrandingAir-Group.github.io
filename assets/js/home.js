
window.addEventListener('load', () => {
    const image_a = document.getElementById('page-home-image-a');
    const image_b = document.getElementById('page-home-image-b');
    const image_c = document.getElementById('page-home-image-c');

    image_a.style.backgroundImage = "url(/assets/img/a.png)";
    image_b.style.backgroundImage = "url(/assets/img/b.png)";
    image_c.style.backgroundImage = "url(/assets/img/c.png)";

    image_a.classList.add("first");
    image_b.classList.add("second");
    image_c.classList.add("third");
    
    images = [image_a, image_b, image_c];

    setInterval(() => {
        for (let i = 0; i < 3; i++) {
            if (images[i].classList.contains("first")) {
                images[i].classList.remove("first");
                images[i].classList.add("second");
            } else if (images[i].classList.contains("second")){
                images[i].classList.remove("second");
                images[i].classList.add("third");
            } else if (images[i].classList.contains("third")){
                images[i].classList.remove("third");
                images[i].classList.add("first");
            }
        }
    }, 3000);
});
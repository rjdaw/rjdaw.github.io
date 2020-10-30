let imagesToLoad = document.querySelectorAll('img[data-src]');

let imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 100px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (!item.isIntersecting) {
                return;
            } else {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions)

    imagesToLoad.forEach((image) => {
        imgObserver.observe(image);
    });

} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
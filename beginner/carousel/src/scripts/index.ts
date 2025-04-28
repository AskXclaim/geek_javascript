const carouselImages =
    new Map([[0, "https://media.geeksforgeeks.org/wp-content/uploads/20241228102812942963/0_ilw552fVUGbwIzbE.jpg"],
        [1, "https://media.geeksforgeeks.org/wp-content/uploads/20241128161121752603/what-is-javascript.webp"],
        [2, "https://media.geeksforgeeks.org/wp-content/uploads/20240829155421/Amazing-new-Javascript-features-in-ES15.webp"]]);
const actualIndexSize = carouselImages.size - 1;
let currentImageIndex = 0;
const setCarouselImage = (id: string, imageIndex = 0) => {
    const carouselElement = document.getElementById(id);
    if (!carouselElement || !carouselImages) {
        return;
    }
    const carouselDiv = carouselElement as HTMLDivElement;
    carouselDiv.style.backgroundImage = `url("${carouselImages.get(imageIndex)!}")`;

    if (imageIndex < 0 || imageIndex > actualIndexSize) {
        currentImageIndex = 0;
    } else {
        currentImageIndex = imageIndex;
    }
};
const moveCarouselRight = (id: string) => {
    let imageIndex = ++currentImageIndex;
    if (imageIndex > actualIndexSize) {
        imageIndex = 0;
    }
    setCarouselImage(id, imageIndex);
}
const moveCarouselLeft = (id: string) => {
    let imageIndex = --currentImageIndex;
    if (imageIndex < 0) {
        imageIndex = actualIndexSize;
    }
    setCarouselImage(id, imageIndex);
}
export {setCarouselImage, moveCarouselRight, moveCarouselLeft};
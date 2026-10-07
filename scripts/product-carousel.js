const productCarousel = document.querySelector(".product-carousel");
const productTrack = document.querySelector("#product-track");
const previousProducts = document.querySelector("[data-carousel-prev]");
const nextProducts = document.querySelector("[data-carousel-next]");

if (productCarousel && productTrack && previousProducts && nextProducts) {
    const getStep = () => {
        const firstCard = productTrack.querySelector(".product-card");
        if (!firstCard) return productCarousel.clientWidth;
        const trackStyle = getComputedStyle(productTrack);
        const gap = parseFloat(trackStyle.columnGap || trackStyle.gap) || 0;
        return firstCard.getBoundingClientRect().width + gap;
    };

    const updateButtons = () => {
        const maxScroll = productCarousel.scrollWidth - productCarousel.clientWidth;
        previousProducts.disabled = productCarousel.scrollLeft <= 2;
        nextProducts.disabled = productCarousel.scrollLeft >= maxScroll - 2;
    };

    previousProducts.addEventListener("click", () => {
        productCarousel.scrollBy({ left: -getStep(), behavior: "smooth" });
    });
    nextProducts.addEventListener("click", () => {
        productCarousel.scrollBy({ left: getStep(), behavior: "smooth" });
    });
    productCarousel.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    updateButtons();
}

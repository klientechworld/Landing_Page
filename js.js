// Navigation
function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}
// End Navigation

// Service Slider
var swiper = new Swiper(".service-slider", {
    slidesPerView: 1,
    spaceBetween: 70,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".service-slider .swiper-button-next",
        prevEl: ".service-slider .swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});
// End Service Slider

// Blog Slider
var swiper = new Swiper(".blog-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".blog-slider .swiper-button-next",
        prevEl: ".blog-slider .swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
// End Blog Slider
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Centered Carousel
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                spaceBetween: 30
            }
        }
    });

    // Page Management
    const pages = document.querySelectorAll('.page');
    const btns = {
        start: document.getElementById('start-journey'),
        reveal: document.getElementById('reveal-feelings'),
        yes: document.getElementById('yes-button'),
        no: document.getElementById('no-button')
    };
    const confessionText = document.getElementById('confession-text');

    function showPage(index) {
        pages.forEach((page, i) => page.classList.toggle('active', i === index));
    }

    // Event Listeners
    btns.start.addEventListener('click', () => showPage(1));
    btns.reveal.addEventListener('click', () => {
        showPage(2);
        confessionText.innerHTML = `
            because I like you<br>
            "kis sense m?" "Romantically"<br>
            In the "imagining my future with you" sense.<br>
            In the "wanting to always be by your side" sense.<br>
            In the "dreaming about you even after I’m awake" sense.<br><br>

            I fell for your way of talking, your hair, naturally brown eyes, and your voice - the sweetest sound my ears have ever heard, like a melody they never want to stop listening to.<br>

            I value your feelings, morals, and work ethic highly, and I never want to change your "dreaminess" or anything else about yourself.<br><br>
            I know you don't like dramatic or poetic lines but want to quote<br>
            "हसरतें मचल गईं जब आपको देखा एक पल के लिए,
            वो दीवानगी क्या होगी जब आप मिलेंगे उम्र भर के लिए 💖"<br><br>

            How we proceed from here is completely up to you. I can’t be your decision-maker here :)<br>
            Take your time, and let me know how you feel. No matter what, I’ll always be by your side and cherish your friendship.
        `;
    });
    btns.no.addEventListener('click', () => showPage(0));
    btns.yes.addEventListener('click', () => confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    }));

    // Initialize first page
    showPage(0);
});

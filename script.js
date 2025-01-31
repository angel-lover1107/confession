document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const startJourneyBtn = document.getElementById('start-journey');
    const revealFeelingsBtn = document.getElementById('reveal-feelings');
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');
    const photoGallery = document.getElementById('photo-gallery');
    const confessionText = document.getElementById('confession-text');

    const photos = [
        'assets/memory1.jpg',
        'assets/memory2.jpg',
        'assets/memory3.jpg',
        'assets/memory4.jpg',
        'assets/memory5.jpg',
        'assets/memory6.jpg',
        'assets/memory7.jpg',
        'assets/memory8.jpg',
        'assets/memory9.jpg'
    ];

    let currentIndex = 0;

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            if (index === pageIndex) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    function addRippleEffect(button) {
        button.addEventListener('click', function(e) {
            let ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            setTimeout(() => {
                ripple.remove();
            }, 300);
        });
    }

    function loadPhotos() {
        photoGallery.innerHTML = '';
        // Create a continuous loop of images
        const extendedPhotos = [...photos, ...photos, ...photos];
        extendedPhotos.forEach((photo, index) => {
            const img = document.createElement('img');
            img.src = photo;
            img.alt = `Our memory ${(index % photos.length) + 1}`;
            img.classList.add('memory-image');
            photoGallery.appendChild(img);
        });
        photoGallery.style.transform = `translateX(-${photos.length * (100 / 3)}%)`;
        startGalleryAnimation();
    }

    function startGalleryAnimation() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % photos.length;
            photoGallery.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
            photoGallery.style.transform = `translateX(-${(currentIndex + photos.length) * (100 / 3)}%)`;
            
            // Reset position when reaching the end of middle set
            if (currentIndex === 0) {
                setTimeout(() => {
                    photoGallery.style.transition = 'none';
                    photoGallery.style.transform = `translateX(-${photos.length * (100 / 3)}%)`;
                }, 500);
            }
        }, 3000);
    }

    function triggerConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    startJourneyBtn.addEventListener('click', function() {
        showPage(1);
        loadPhotos();
    });

    revealFeelingsBtn.addEventListener('click', function() {
        showPage(2);
        confessionText.innerHTML = `
            Hey Angel, I really like you<br><br>
            "kis sense m?" "Romantically."<br>
            In the "imagining my future with you" sense.<br>
            In the "wanting to always be by your side" sense.<br>
            In the "dreaming about you even after I’m awake" sense.<br><br>
            
            And no, I didn’t fall for you after some stupid prank incident. You’re just perfect. Your hair, naturally brown eyes, your voice - the sweetest sound my ears have ever heard, like a melody they never want to stop listening to.<br>
            
            I want you to know - you never need to self-validate my actions, conceal your emotions, or not be honest just to avoid hurting me or because of "koi aur kya sochega."<br>
            
            Never, ever lower your expectations. Continue being the dreamy girl I have a crush on.<br><br>
            
            How we proceed from here is completely up to you, I can't be the decision-maker here :). Take your time, let me know how you feel. No matter what, I’ll always be by your side ❤️.
        `;
    });

    noButton.addEventListener('click', function() {
        showPage(0);
        currentIndex = 0;
        photoGallery.style.transform = `translateX(-${photos.length * (100 / 3)}%)`;
    });

    yesButton.addEventListener('click', function() {
        triggerConfetti();
    });

    // Initialize
    showPage(0);
    addRippleEffect(startJourneyBtn);
    addRippleEffect(revealFeelingsBtn);
    addRippleEffect(noButton);
    addRippleEffect(yesButton);
});

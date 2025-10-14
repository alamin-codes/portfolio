


// toggle icon navber
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// Scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active section for animation on scroll
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 200);

    
    // remove toggle icon and when click navber links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


// Projects_section

// const cards = document.querySelectorAll('.image-card');

// cards.forEach((card) => {
//     const img = card.querySelector('img');
//     card.addEventListener('mouseenter', () => {
//         img.style.transform = 'translateY(-380px)';
//     });
    
//     card.addEventListener('mouseleave', () => {
//         img.style.transform = 'translateY(0)';
//     });
// })


const cards = document.querySelectorAll('.image-card');

cards.forEach((card) => {
    const img = card.querySelector('img');

    card.addEventListener('mouseenter', () => {
        const cardHeight = card.offsetHeight;
        const imgHeight = img.offsetHeight;
        const moveY = imgHeight - cardHeight; // dynamic distance
        img.style.transform = `translateY(-${moveY}px)`;
    });

    card.addEventListener('mouseleave', () => {
        img.style.transform = 'translateY(0)';
    });
});












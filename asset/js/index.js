console.log("chargement terminer !")
console.log("Site crée par royaly#0001, @royaly")

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        for (const entry of entries) {
            console.log(entries)
            if (entry.isIntersecting) {
                entry.target.animate([
                    { transform: 'translateY(-10px)', opacity: 0 },
                    { transform: 'translateY(0px)', opacity: 1 }
                ], {
                    duration: 800
                })

                observer.unobserve(entry.target)
            }
        }
    })

    observer.observe(document.querySelector('#view'))
    observer.observe(document.querySelector('.home-img'))
    observer.observe(document.querySelector('.view-competence'))
    observer.observe(document.querySelector('.skill-bars'))
    observer.observe(document.querySelector('.projet-texte'))
    observer.observe(document.querySelector('.projet-pro'))
    observer.observe(document.querySelector('.footer-text'))
})
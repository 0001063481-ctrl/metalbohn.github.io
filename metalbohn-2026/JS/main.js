// Smooth Scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adicione aqui lógica futura para animações ao rolar a página (ScrollReveal)
console.log("Sistema Metalbohn 2026 Carregado.");
// Ativar animação ao rolar a página
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.feature-card, .card-glass, .section-title');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active', 'reveal');
        } else {
            reveals[i].classList.remove('active', 'reveal'); // Opcional: remover para animar apenas uma vez
        }
    }
}
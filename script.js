let cos ;


window.onload = function(){
    cos = document.body;
   
    pagina();
    h2desplasar();
    pistestab();
    enllaç();
    galeriaZoom();
}


function baixar() {
    if (window.scrollY > 100) {
        cos.classList.add('desplasat');
    } else {
        cos.classList.remove('desplasat');
    }
}

function pagina() {
    window.addEventListener('scroll', baixar);
}

function h2desplasar() {
    let titul = document.querySelector('.subtitul-header');
    
    titul.addEventListener('click', function() {
        moviment('#sobre');
    });
}

function moviment(targetId) {
    let targetElement = document.querySelector(targetId);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop, 
            behavior: 'smooth' 
        });
    }
}

function pistestab() {
    let imatges = document.querySelectorAll('#pistes img');

    for (let i = 0; i < imatges.length; i++) {
        imatges[i].addEventListener('click', function(event) {
            event.preventDefault();
            let imatge = imatges[i].getAttribute('src');
            window.open(imatge);
        });
    }
}

function enllaç() {
    let enlacesInteres = document.querySelectorAll('.enlaces-interes a');

    let numEnlaces = enlacesInteres.length;

    for (let i = 0; i < numEnlaces; i++) {
        let enlace = enlacesInteres[i];

        enlace.addEventListener('click', function(event) {
            event.preventDefault();
            this.style.color = 'purple';
            let url = enlace.getAttribute('href');
            window.open(url);
        });
    }
}

function galeriaZoom() {
    let galeriaImages = document.querySelectorAll('.galeria img');

    for (let i = 0; i < galeriaImages.length; i++) {
        galeriaImages[i].addEventListener('click', function() {
           
            for (let j = 0; j < galeriaImages.length; j++) {
                galeriaImages[j].style.transform = 'scale(1)';
                galeriaImages[j].classList.remove('zoomed');
            }

            
            let zoom = !this.classList.contains('zoomed');

            
            if (zoom) {
                this.style.transform = 'scale(2)';
                this.classList.add('zoomed');
            } else {
                this.style.transform = 'scale(1)';
                this.classList.remove('zoomed');
            }
        });
    }

   
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.zoomed')) {
            for (let i = 0; i < galeriaImages.length; i++) {
                galeriaImages[i].style.transform = 'scale(1)';
                galeriaImages[i].classList.remove('zoomed');
            }
        }
    });
}



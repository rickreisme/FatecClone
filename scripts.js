function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
        setTimeout(function () {
            dropdown.style.display = "none";
        }, 500);
    } else {
        closeAllDropdowns();
        dropdown.style.display = "block";
        setTimeout(function () {
            dropdown.classList.add("show");
        }, 10);
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.topics')) {
        closeAllDropdowns();
    }
}

function closeAllDropdowns() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
            setTimeout(function () {
                openDropdown.style.display = "none";
            }, 500);
        }
    }
}

$(document).ready(function () {
    // Inicializa o Carrossel Slick
    $('.slick-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $('#arrowL'), // Use IDs diretamente
        nextArrow: $('#arrowR'), // Use IDs diretamente
    });

    // Adiciona um ouvinte de evento para o evento init
    $('.slick-slider').on('init', function (event, slick) {
        // Aqui você pode adicionar suas próprias classes ou estilos
        $('.slick-prev', this).addClass('arrowPrev');
        $('.slick-next', this).addClass('arrowNext');
    });
});

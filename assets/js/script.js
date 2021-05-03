function abrir(){
    var menuOpen = document.querySelector('.menu-open');
    menuOpen.setAttribute("id", "btn-menu");
}
function fechar(){
    var menuOpen = document.querySelector('.menu-open');
    menuOpen.removeAttribute("id", "btn-menu");
}
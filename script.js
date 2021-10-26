function toggleClicked (event) {
    document.getElementById("bodyId").classList.toggle("clicked");
}

function loadEvent() {
    console.log('the page has loaded');

    document.getElementById("menu-btn").addEventListener("click", toggleClicked);
    
}
window.addEventListener("load", loadEvent);

//bodyra id, click esemény a gombon hívódjon meg, de a class nevet a body kapja (csak ő) és a css uígy működjön -- szelektorok css-ben

/* 
function toggleClicked (event) {
    document.getElementById("bodyId").classList.toggle("clicked");
}
 */
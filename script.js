// function loadEvent () {
//     const rootElement = document.getElementById("root");
// }

// window.addEventListener ("load", loadEvent);

function loadEvent() {
    console.log('the page has loaded');
    
    function toggleClicked (event) {
        event.target.classList.toggle("clicked");
        // document.getElementById("menu-btn").classList.toggle("clicked");
    };

    document.getElementById("menu-btn").addEventListener("click", toggleClicked);

    // document.getElementById("menu-btn").addEventListener("click", function (event) {
    //     console.log(event.target);
    //     event.target.classList.toggle("clicked");
    //     // document.getElementById("menu-btn").classList.toggle("clicked");
    // });
}

// függvényt hozzuk ki és kapjon nevet és a működés ne essen szét

window.addEventListener("load", loadEvent);
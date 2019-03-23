function openNav() {
    var overlay = document.getElementById("links-wrapper");
    if (overlay.className === "linkwrap") {
        overlay.className += " responsive-overlay";
    } else {
        overlay.className = "linkwrap";
    }

    var close = document.getElementById("links-close");
    if (close.className === "linkclose") {
        close.className += " responsive-close";
        console.log("hello");
    } else {
        close.className = "linkclose";
    }
}
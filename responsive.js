function changeToHamburger() {
    var x = document.getElementById("links-wrapper");
    if (x.className === "linkwrap") {
        x.className += " responsive-overlay";
    } else {
        x.className = "linkwrap";
    }
}
document.querySelectorAll(".item__cursor").forEach( element => {
    document.addEventListener("mousemove", e => {
        element.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`;
    });

});

/* document.querySelectorAll(".body-text").forEach(element => {
    document.addEventListener("mouseover", () => {
        element.style.cssText = `--border: transparent;`;
    });
    

}); */


/* document.querySelectorAll(".body-text").forEach(element => {
    document.addEventListener("mouseover", () => {
        element.style.cssText = `--border: transparent;`;
    });
    

}); */

/* document.getElementsByClassName("body-text").forEach(element => {
    document.nextSibling.addEventListener("mouseover", () => {
        element.style.cssText = `--border: transparent;`;
    });
}); */

/* const children = document.querySelectorAll(".body-text").children; */
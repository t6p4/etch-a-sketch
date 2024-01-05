const container = document.querySelector(".container");
const grids = document.querySelectorAll(".grid");

function createGrid() {
    let n = prompt("How big grid do you want?");
    for (let i = 0; i < n * n; i++) {
        const div = document.createElement("div");
        div.style.height = `${700 / n}px`
        div.style.width = `${700 / n}px`
        div.classList.add("grid")
        container.appendChild(div)
    }
}

container.addEventListener("mouseover", (e) => {
    if (e.target.classList == "grid") {
        e.target.classList.add("black");
    }
})
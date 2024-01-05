const container = document.querySelector(".container");
const grids = document.querySelectorAll(".grid");
const button = document.querySelector(".create")
let n;
button.addEventListener("click", (e) => {
    n = Number(prompt("How big grid do you want?"));
    createGrid()
})

function createGrid() {
    clearGrid()
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

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}
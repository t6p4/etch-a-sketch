const container = document.querySelector(".container");

function createGrid() {
    let n = prompt("How big grid do you want?");
    for (let i = 0; i < n * n; i++) {
        const div = document.createElement("div");
        div.style.height = `${700 / n}px`
        div.style.width = `${700 / n}px`

        div.style.backgroundColor = "red"
        container.appendChild(div)
    }
}
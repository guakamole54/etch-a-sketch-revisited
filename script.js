const container = document.querySelector('.container');
const btnReset = document.querySelector('.btn-reset');
const gridSize = document.querySelector('.grid-size');

btnReset.addEventListener('click', () => {
    resetGrid()
})

gridSize.addEventListener("change", () => render())

function render() {
    // clear the existing divs
    container.innerHTML = '';
    let gridSizeVal = +gridSize.value;
    const divSizePx = (560 / gridSizeVal);
    console.log(divSizePx);
    for (let row = 0; row < gridSizeVal; row++) {
        for (let col = 0; col < gridSizeVal; col++) {
            const div = document.createElement('div');
            div.className = 'grid';
            div.style.width = divSizePx + "px";
            div.style.height = divSizePx + "px";
            div.addEventListener('mouseenter', () => div.classList.add('grid-black'));
            container.appendChild(div);
        }

    }

}

function resetGrid() {
    const gridDivs = document.querySelectorAll('.grid-black');
    gridDivs.forEach(div => {
        div.classList.remove('grid-black');
    });
}

render();

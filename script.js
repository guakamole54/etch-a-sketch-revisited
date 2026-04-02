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
            div.addEventListener('mouseenter', (e) => {
                if (!e.target.classList.contains('colored')) {
                    div.style.backgroundColor = randomizeColor();
                    div.classList.add('colored')
                }
            });
            container.appendChild(div);
        }

    }

}

function resetGrid() {
    const gridDivs = document.querySelectorAll('.grid');
    gridDivs.forEach(div => {
        div.style.backgroundColor = 'white'
    });
}

function randomizeColor() {
    const randRGBchannel = () => Math.floor(Math.random() * 255);
    return `rgb(${randRGBchannel()}, ${randRGBchannel()}, ${randRGBchannel()})`
}

console.log(randomizeColor());

render();

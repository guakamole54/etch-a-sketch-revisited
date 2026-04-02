const container = document.querySelector('.container');
const btnReset = document.querySelector('.btn-reset');
const gridSize = document.querySelector('.grid-size');
const penMode = document.querySelector('#pen');

btnReset.addEventListener('click', () => {
    resetGrid()
})

gridSize.addEventListener("change", () => render())
penMode.addEventListener("change", () => render())

function render() {
    // clear the existing divs
    container.innerHTML = '';
    let gridSizeVal = +gridSize.value;
    const divSizePx = (560 / gridSizeVal);
    for (let row = 0; row < gridSizeVal; row++) {
        for (let col = 0; col < gridSizeVal; col++) {
            const div = document.createElement('div');
            div.className = 'grid';
            div.style.width = divSizePx + "px";
            div.style.height = divSizePx + "px";
            div.addEventListener('mouseenter', (e) => {
                switch (penMode.value) {
                    case 'black':
                        if (!e.target.classList.contains('colored')) {
                            div.style.backgroundColor = 'black';
                            div.classList.add('colored')
                        }
                        break;
                    case "random-color":
                        if (!e.target.classList.contains('colored')) {
                            div.style.backgroundColor = randomizeColor();
                            div.classList.add('colored')
                        }
                        break;
                    case "black-progress":
                        if (!e.target.classList.contains('colored')) {
                            div.style.backgroundColor = 'black';
                            div.style.opacity = 0.1;
                            div.classList.add('colored');

                        } else {
                            div.style.opacity = Math.min(+div.style.opacity + 0.1, 1);
                        }
                        break;

                }
            })
            container.appendChild(div);
        }

    }

}

function resetGrid() {
    const gridDivs = document.querySelectorAll('.grid');
    gridDivs.forEach(div => {
        div.style.backgroundColor = 'white';
        div.style.opacity = null;
    });
}

function randomizeColor() {
    const randRGBchannel = () => Math.floor(Math.random() * 255);
    return `rgb(${randRGBchannel()}, ${randRGBchannel()}, ${randRGBchannel()})`
}

console.log(randomizeColor());

render();

var controls = document.getElementById("controlDiv")
var slider = document.getElementById("changeDepth")
var fab = document.getElementById("fab")
var originalParent = document.getElementById('colorDivParent');
var currentParent = originalParent;

function onSliderChange() {
    var val = slider.value
    console.log(val);

    createNestedColors(val)
}

function createNestedColors(depth) {
    clearOriginalParent();
    for (let index = 0; index < depth; index++) {
        let colorDiv = document.createElement('div');
        colorDiv.className = "colorDiv"
        colorDiv.style.border = `10px solid ${getRandomColor()}`
        currentParent.appendChild(colorDiv);
        currentParent = colorDiv;
    }
}

function clearOriginalParent() {
    while (originalParent.firstChild) {
        originalParent.removeChild(originalParent.lastChild);
    }
    originalParent.innerHTML = '';
    currentParent = originalParent;
}
// var depth = 20;


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function fabClick() {
    console.log('fab clicked');
    console.log(controls.style.display);


    if (controls.style.display === "none") {
        controls.style.display = "block";
        originalParent.style.top = "5em";
    } else {
        controls.style.display = "none";
        originalParent.style.top = "0";
    }
}


function init() {
    console.log(`initially ${slider.value}`);

    slider.oninput = () => { onSliderChange() }

    fab.onclick = fabClick

    createNestedColors(slider.value);
}
init()
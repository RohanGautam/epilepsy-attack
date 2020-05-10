
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var style = document.createElement('style');
document.head.appendChild(style);
style.sheet.insertRule(`body{border: 10px solid ${getRandomColor()};position: absolute;top: 0;right: 0;bottom:0;left: 0;overflow: auto;}`);
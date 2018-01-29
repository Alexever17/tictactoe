
function clickButton(tile) {
    var test = tileTest(tile);
    if (test) {
        writeX(tile);
        var check = checkSystem(tile, "X");
    }
}

function tileTest(tile) {
    if (tile.innerHTML != "") {
        return false;
    } else {
        return true;
    }
}

function writeX(tile) {
    tile.innerHTML = "X";
}

function checkSystem(tile, letter) {
    var row = rowCheck(tile, letter);
    console.log(row);
    var column = columnCheck(tile, letter);
    console.log(column);
    var diagonal = diagonalCheck(tile, letter);
    console.log(diagonal);
}

function rowCheck(tile, letter) {
    var value = 0;
    switch (tile.parentElement.id.slice(3)) {
    case "1":
        if (document.getElementById('one').innerHTML == letter) {
            value += 1;
        }
        if (document.getElementById('two').innerHTML == letter) {
            value += 1;
        }
        if (document.getElementById('three').innerHTML == letter) {
            value += 1;
        }
        break;
    case "2":
        if (document.getElementById('four').innerHTML == letter) {
            value += 1;
        }
        if (document.getElementById('five').innerHTML == letter) {
            value += 1;
        }
        if (document.getElementById('six').innerHTML == letter) {
            value += 1;
        }
        break;
    case "3":
        if (document.getElementById('seven').innerHTML == letter) {
            value += 1;
        }
        if (document.getElementById('eight').innerHTML == letter) {
            value += 1;
        }
        if (document.getElementById('nine').innerHTML == letter) {
            value += 1;
        }
        break;
}
    return value;
}

function columnCheck(tile, letter) {
    var value = 0;
    if (tile.parentElement.id.slice(3) == 1) {
        number = Number(tile.classList[2].slice(1));
        if (document.getElementsByClassName('i'+ number)[0].innerHTML == letter) {
            value += 1;
        }
        if (document.getElementsByClassName('i' + (number+3))[0].innerHTML == letter) {
            value += 1;
        }
        if (document.getElementsByClassName('i' + (number+6))[0].innerHTML == letter) {
            value += 1;
        }
    }
    if (tile.parentElement.id.slice(3) == 2) {
        number = Number(tile.classList[2].slice(1));
        if (document.getElementsByClassName('i' + number)[0].innerHTML == letter) {
            value += 1;
        }
        if (document.getElementsByClassName('i' + (number-3))[0].innerHTML == letter) {
            value += 1;
        }
        if (document.getElementsByClassName('i' + (number+3))[0].innerHTML == letter) {
            value += 1;
        }
    }
    if (tile.parentElement.id.slice(3) == 3) {
        number = Number(tile.classList[2].slice(1));
        if (document.getElementsByClassName('i' + number)[0].innerHTML == letter) {
            value += 1;
        }
        if (document.getElementsByClassName('i' + (number-3))[0].innerHTML == letter) {
            value += 1;
        }
        if (document.getElementsByClassName('i' + (number-6))[0].innerHTML == letter) {
            value += 1;
        }
    }


    return value;
}

function diagonalCheck(tile, letter) {
    var value = 0;
    number = Number(tile.classList[2].slice(1));
    if (number == 1 || number == 9) {
        if (document.getElementsByClassName('i1')[0].innerHTML == letter) {
            value += 1;
        }
        if (document.getElementsByClassName('i9')[0].innerHTML == letter) {
            value += 1;
        }
    }
    if (number == 3 || number == 7) {
        if (document.getElementsByClassName('i3')[0].innerHTML == letter) {
            value += 1;
        }
        if (document.getElementsByClassName('i7')[0].innerHTML == letter) {
            value += 1;
        }
    }
    if (document.getElementsByClassName('i5')[0].innerHTML == letter) {
        value += 1;
    }
    return value;
}

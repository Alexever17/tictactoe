
function clickButton(tile) {
    var test = tileTest(tile);
    if (test) {
        write(tile, "X");
    }
    var check9 = checkNine();
    if (check9) {
        gameFinish();
        return;
    }
    var checkX = checkSystem(tile, "X");
    if (checkX.includes(3)) {
        gameFinish();
        return;
    }
    oResponseRandom();
}

function oResponseRandom() {
    var identification = 0;
    var tileO;
    while (true) {
        identification = Math.floor(Math.random() * 9) + 1;
        tileO = document.getElementsByClassName("i" + identification)[0];
        if (tileO.innerHTML == "") {
            write(tileO, "O");
            break;
        }
    }
    var checkO = checkSystem(tileO, "O");
    if (checkO.includes(3)) {
        gameFinish();
        return;
    }
}

function tileTest(tile) {
    if (tile.innerHTML != "") {
        return false;
    } else {
        return true;
    }
}

function write(tile, letter) {
    tile.innerHTML = letter;
}

function checkNine() {
    var value = 0;
    for (var i = 0; i < 9; i++) {
        if (document.getElementsByClassName("field")[i].innerHTML != "") {
            value += 1;
        }
    }
    if (value == 9) {
        return true;
    } else {
        return false;
    }
}

function checkSystem(tile, letter) {
    var row = rowCheck(tile, letter);
    var column = columnCheck(tile, letter);
    var diagonal = diagonalCheck(tile, letter);
    var finishedCheck = [row, column, diagonal];
    return finishedCheck;
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

function gameFinish() {
    for (var i = 0; i < 9; i++) {
        document.getElementsByClassName("field")[i].disabled = true;
    }
}

function newGame() {
    for (var i = 0; i < 9; i++) {
        document.getElementsByClassName("field")[i].innerHTML = "";
        document.getElementsByClassName("field")[i].disabled = false;
    }
}

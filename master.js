var clickCounter = 0;
var storage;


function clickButton(tile) {
    var test = tileTest(tile);
    if (test) {
        clickCounter += 1;
        write(tile, "X");
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
        var tileO = oResponse(tile, checkX);
        var checkO = checkSystem(tileO, "O");
        if (checkO.includes(3)) {
            gameFinish();
            return;
        }
    }
}

function oResponse(tile, checkX) {
    var tileO;
    switch (clickCounter) {
        case 1:
            tileO = oResponseRandom();
            break;
        case 2:
        case 3:
        case 4:
            tileO = twoXlocator(tile, checkX);
            break;
    }
    return tileO;
}

function twoXlocator(tile, checkX) {
    var tileO;
    var test;
    var counter = 0;
    rowNumber = (tile.parentElement.id.slice(3) - 1);
    if (checkX[0] == 2) {
        for (var i = 1; i < 4; i++) {
            number1 = i + (rowNumber*3);
            test = tileTest(document.getElementsByClassName("i" + number1)[0]);
            if (test) {
                tileO = document.getElementsByClassName("i" + number1)[0];
                write(tileO, "O");
                return tileO;
            }
        }
        counter += 1;
    } else {
        counter += 1;
    }
    if (checkX[1] == 2) {
        columnNumber = Number(tile.classList[2].slice(1));
        switch (columnNumber) {
            case 1:
            case 4:
            case 7:
                columnNumber = 0;
                break;
            case 2:
            case 5:
            case 8:
                columnNumber = 1;
                break;
            case 3:
            case 6:
            case 9:
                columnNumber = 2;
                break;
        }
        for (var j = 1; j < 10; j += 3) {
            number2 = j + columnNumber;
            test = tileTest(document.getElementsByClassName("i" + number2)[0]);
            if (test) {
                tileO = document.getElementsByClassName("i" + number2)[0];
                write(tileO, "O");
                return tileO;
            }
        }
        counter += 1;
    } else {
        counter += 1;
    }
    if (checkX[2] == 2) {
        diagonalNumber = Number(tile.classList[2].slice(1));
        switch (diagonalNumber) {
            case 2:
            case 4:
            case 6:
            case 8:
                break;
            case 1:
            case 9:
                for (var k = 1; k < 10; k += 4) {
                    number3 = k;
                    test = tileTest(document.getElementsByClassName("i" + number3)[0]);
                    if (test) {
                        tileO = document.getElementsByClassName("i" + number3)[0];
                        write(tileO, "O");
                        return tileO;
                    }
                }
                break;
            case 3:
            case 7:
                for (var r = 3; r < 8; r += 2) {
                    number4 = r;
                    test = tileTest(document.getElementsByClassName("i" + number4)[0]);
                    if (test) {
                        tileO = document.getElementsByClassName("i" + number4)[0];
                        write(tileO, "O");
                        return tileO;
                    }
                }
                break;
            case 5:
                if (document.getElementById('one').innerHTML == "X" || document.getElementById('nine').innerHTML == "X") {
                    for (var v = 1; v < 10; v += 4) {
                        number5 = v;
                        test = tileTest(document.getElementsByClassName("i" + number5)[0]);
                        if (test) {
                            tileO = document.getElementsByClassName("i" + number5)[0];
                            write(tileO, "O");
                            return tileO;
                        }
                    }
                }
                if (document.getElementById('three').innerHTML == "X" || document.getElementById('seven').innerHTML == "X") {
                    console.log("s");
                    for (var x = 3; x < 8; x += 2) {
                        number6 = x;
                        test = tileTest(document.getElementsByClassName("i" + number6)[0]);
                        if (test) {
                            tileO = document.getElementsByClassName("i" + number6)[0];
                            write(tileO, "O");
                            return tileO;
                        }
                    }
                }
                break;
        }
        counter += 1;
    } else {
        counter += 1;
    }
    if (counter > 2) {
        tileO = oResponseRandom();
    }
    return tileO;
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
    return tileO;
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
    if (number == 5) {
        if (document.getElementsByClassName('i1')[0].innerHTML == letter) {
            value += 1;
        }
        if (document.getElementsByClassName('i9')[0].innerHTML == letter) {
            value += 1;
        }
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
    clickCounter = 0;
    for (var i = 0; i < 9; i++) {
        document.getElementsByClassName("field")[i].innerHTML = "";
        document.getElementsByClassName("field")[i].disabled = false;
    }
}

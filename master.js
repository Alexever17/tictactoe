
function clickButton(tile) {
    var test = tileTest(tile);
    if (test) {
        writeX(tile);
        var check = checkSystem(tile, "X");
        console.log(check);
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
    var column = columnCheck(tile, letter);
    var diagonal = diagonalCheck(tile, letter);
    return row, column, diagonal;
}

function rowCheck(tile, letter) {
    switch (tile.parentElement.id.slice(3)) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("1");
        day = "Monday";
        break;
    case 3:
        console.log("1");
        day = "Tuesday";
        break;
}
}

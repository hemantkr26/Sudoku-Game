var numSelected = null;
var tileSelected = null;

var errors = 0;
var board = [
    "2---3--4-",
    "-3-6----7",
    "--9--71-8",
    "--4-72---",
    "-25-819--",
    "1-3--6--5",
    "----2-4--",
    "4-68---7-",
    "5--9--3--",
]

var solution = [
    "257138649",
    "831649257",
    "649257138",
    "914572813",
    "725381964",
    "183496725",
    "318725496",
    "496813572",
    "572964381",
]

window.onload = function () {
    setGame();
}

function setGame() {
    //Digits should be in 1-9
    for (i = 1; i <= 9; i++) {
        //<div id ="1" class="number"></div> created a div tag in javascript like this
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);//for selecting the number
        number.classList.add("number");
        document.getElementById("digits").appendChild(number); //it will take the div tag that we created and place it at html body div section in the <div id="digits"> in this <div id="1" class="number">1</div> so ..... to 9
        //if we do manually add in the html file we have to write (9x9) 81 times so that we used the javascript for that  
    }

    //Board (9x9)
    //for rowrs
    for (let r = 0; r < 9; r++) {
        //for columns
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            //for checking rows and columns "1-1" "2-5"
            tile.id = r.toString() + "-" + c.toString();
            //for skiping the - dash we used skip
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            // for making 3x3 table by the horizontal and vertical maded in the css file
            if(r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if(c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

//its for choosing and clicking the number for adding 
function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");//number-selected in the css page 
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

//adding the number in the board from the number list
function selectTile() {
    // in this if command the input number should be not overridden 
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }
        //for matching with the right answer
        //we know that the address are in the form of 0-1 , 0-0 
        let coords = this.id.split("-");// just we remove this - between that numbers in the form of array ["0", "1"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        //checking the solution
        if(solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}
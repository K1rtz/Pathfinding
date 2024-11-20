const size = 30
var board = []

initializeBoard()
function initializeBoard(){

    for(let i = 0; i < size; i++){
        board[i] = [];
        for(let j = 0; j < size+10; j++){
            // if(i == 0 || i == size-1 || j == 0 || j == size+10-1)
            //     board[i][j] = 0
            // else
            //     board[i][j] = 1
            board[i][j] = createTile(i,j)
        }
    }
}

function createTile(i,j){
    let tile = document.createElement('div')
    tile.x = i
    tile.y = j
    tile.visited = false;
    tile.visited2 = false;

    tile.wall = false;

    tile.addEventListener('mousedown', e =>{
        e.preventDefault();
        pressed = true;
        if(e.button === 0){
            pressed = true;
        }
        else if(e.button === 2){
            pressedRight = true;
        }
        // console.log(pressed);
        if(tile.innerHTML!="🐇" && tile.innerHTML!="🥕"){ //&& tile.broj != "0"){
            
            switch(currentBrush){
                case "rabbit":
                    if(tile.broj!="0"){
                        tile.innerHTML = "🐇";
                        currentBrush = "empty";
                        document.body.style.cursor = "auto";
                        tile.classList.add("start");
                    }
                    break;
                case "carrot":
                    if(tile.broj!="0"){
                        tile.innerHTML = "🥕";
                        currentBrush = "empty";
                        document.body.style.cursor = "auto";
                        tile.classList.add("end");
                    }
                    break;
                case "brush":
                    if(!tile.wall && pressed && !pressedRight){
                        tile.style.backgroundColor = "#0B2027";
                        // tile.style.border = "1px solid #0B2027";
                        tile.wall = true;
                    }
                    if(tile.wall && pressedRight){
                        tile.style.backgroundColor = '#F2F7F2'
                        tile.wall = false;
                    }
                    break;
                default:
                    console.log("Switch za cetku nije validan!");
            }
        }
        else if((tile.innerHTML == "🐇" || tile.innerHTML=="🥕") && currentBrush!="brush" && currentBrush != "rabbit" && currentBrush != "carrot"){
            if(tile.innerHTML == "🐇"){
                tile.innerHTML = " ";
                document.body.style.cursor = `url("img/rabb.svg"), auto`;
                currentBrush = "rabbit";
                tile.classList.remove("start");
                console.log(tile.classList);
            }
            else{
                tile.innerHTML = " ";
                document.body.style.cursor = `url("img/carr.svg"), auto`;
                currentBrush = "carrot";
                tile.classList.remove("end");
            }
        }


        //tile.style.backgroundColor = "black";
        //tile.broj = "0";
    })
    tile.addEventListener('mouseenter', e =>{
        e.preventDefault()
        if(pressed && currentBrush == "brush"){
            if(tile.innerHTML!="🐇" && tile.innerHTML!="🥕" && pressed && !pressedRight){
                // tile.style.backgroundColor = "black";
                tile.style.backgroundColor = "#0B2027";
                // tile.style.border = "1px solid #0B2027";

                tile.wall = true;
            }
            else if(tile.innerHTML!="🐇" && tile.innerHTML!="🥕" && pressedRight){
                tile.style.backgroundColor = '#F2F7F2'
                tile.wall = false;
            }
        }
    })
    tile.addEventListener('mouseup', e=>{
        e.preventDefault()
            pressed = false
            pressedRight = false
        
    })

    tile.classList.add("tile");
    document.getElementById("board").appendChild(tile);
    return tile
}

const array = [];
// var pathFound = false;
var pressed = false;
var pressedRight = false;
// createGrid();
document.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Sprečava podrazumevani meni desnog klika
});
function createGrid(){
    for(let r = 0; r < size; r++){
        for(let c=0; c<size+10; c++){
            let tile = document.createElement("div");
            tile.id = r*40+c;
            tile.broj = board[r][c];
            tile.classList.add("tile");
            tile.posecen = false;
            tile.parent = null;
            tile.visited = false;
            tile.visited2 = false;
            tile.x = r;
            tile.y = c;
            tile.addEventListener('mousedown', e =>{
                e.preventDefault();
                pressed = true;
                if(e.button === 0){
                    pressed = true;
                }
                else if(e.button === 2){
                    pressedRight = true;
                }
                // console.log(pressed);
                if(tile.innerHTML!="🐇" && tile.innerHTML!="🥕"){ //&& tile.broj != "0"){
                    
                    switch(currentBrush){
                        case "rabbit":
                            if(tile.broj!="0"){
                                tile.innerHTML = "🐇";
                                currentBrush = "empty";
                                document.body.style.cursor = "auto";
                                tile.classList.add("start");
                            }
                            break;
                        case "carrot":
                            if(tile.broj!="0"){
                                tile.innerHTML = "🥕";
                                currentBrush = "empty";
                                document.body.style.cursor = "auto";
                                tile.classList.add("end");
                            }
                            break;
                        case "brush":
                            if(tile.broj!=0 && pressed){
                                tile.style.backgroundColor = "black";
                                tile.broj = "0";
                            }
                            if(tile.broj==0 && pressedRight && tile.x != 0 && tile.x !=size-1 && tile.y != 0 && tile.y != size-1){
                                tile.style.backgroundColor = '#A9A9A9'
                                tile.broj = "1"
                            }
                            break;
                        default:
                            console.log("Switch za cetku nije validan!");
                    }
                }
                else if((tile.innerHTML == "🐇" || tile.innerHTML=="🥕") && currentBrush!="brush"){
                    if(tile.innerHTML == "🐇"){
                        tile.innerHTML = " ";
                        document.body.style.cursor = `url("img/rabb.svg"), auto`;
                        currentBrush = "rabbit";
                        tile.classList.remove("start");
                        console.log(tile.classList);
                    }
                    else{
                        tile.innerHTML = " ";
                        document.body.style.cursor = `url("img/carr.svg"), auto`;
                        currentBrush = "carrot";
                        tile.classList.remove("end");
                    }
                }


                //tile.style.backgroundColor = "black";
                //tile.broj = "0";
            })
            tile.addEventListener('mouseenter', e =>{
                e.preventDefault()
                if(pressed && currentBrush == "brush"){
                    if(tile.innerHTML!="🐇" && tile.innerHTML!="🥕" && pressed && !pressedRight){
                        tile.style.backgroundColor = "black";
                        tile.broj = "0";
                    }
                    else if(tile.innerHTML!="🐇" && tile.innerHTML!="🥕" && pressedRight && tile.x != 0 && tile.x !=size-1 && tile.y != 0 && tile.y != size-1){
                        tile.style.backgroundColor = '#A9A9A9'
                        tile.broj = "1"
                    }
                }
            })
            tile.addEventListener('mouseup', e=>{
                e.preventDefault()
                    pressed = false
                    pressedRight = false
                
            })

            tile.broj == 0 ? tile.vrstaBloka = "wall" : tile.vrstaBloka = "path";
            tile.vrstaBloka == "wall" ? tile.style.backgroundColor = "black" : tile.style.backgroundColor = "darkgrey";

            document.getElementById("board").appendChild(tile);
        }
    }
    createForm();
}

function clearWalls(){
    console.log('teto')
    board.forEach(e=>{
        e.forEach(l =>{
            l.wall = false;
            l.style.backgroundColor = '#F2F7F2'
        })
    })
}

createForm()
function createForm(){
    let form = document.createElement("div");
    form.classList.add("cform")

    // document.getElementById("form").appendChild(form);
    let formfields = document.createElement("div");

    document.getElementById("formSettings").appendChild(formfields);



    let selectAlgorithm = document.createElement("select");
    selectAlgorithm.classList.add("cselect");
    const algorithmOptions = ["DFS", "BFS", "A*", "Bidirectional"];
    algorithmOptions.forEach(el =>{
        const optionEl = document.createElement("option");
        optionEl.value = el;
        optionEl.innerHTML = el;
        selectAlgorithm.appendChild(optionEl);
    })

    let title = document.querySelector('.title')
    selectAlgorithm.onchange = (ev) =>{
        console.log(ev.target.value)
        title.innerHTML = '' + ev.target.value + ' Search'
        title.innerHTML = '' + ev.target.value + ' Search'
    }
    
    
    
    let formFiledsButtons = document.createElement("div");
    formFiledsButtons.classList.add("formFieldsButtons");
    
    let resetButton = document.createElement("button");
    resetButton.classList.add("button1");
    resetButton.innerHTML = "Reset"
    resetButton.addEventListener('click', resetColor);
    
    let calculatePathButton = document.createElement("button");
    calculatePathButton.classList.add("button1");
    calculatePathButton.innerHTML = "Find path"
    calculatePathButton.addEventListener('click', nadjiPut);
    
    let clearWallsButton = document.createElement('button')
    clearWallsButton.classList.add('button1')
    clearWallsButton.innerHTML = "Clear Walls"
    clearWallsButton.addEventListener('click', clearWalls);
    
    let rabbitDiv = document.createElement("div");
    let carrotDiv = document.createElement("div");
    let brushDiv = document.createElement("div");
    rabbitDiv.classList.add("rabbit_image", 'pickerDiv');
    carrotDiv.classList.add("carrot_image", 'pickerDiv');
    brushDiv.classList.add("brush_image", 'pickerDiv');
    
    rabbitDiv.used = false;
    carrotDiv.used = false;
    
    let sandbox = document.createElement("div");
    // sandboxsettings.appendChild(pomocni);
    sandbox.classList.add("sandbox");
    
    formfields.appendChild(sandbox);
    sandbox.appendChild(brushDiv);
    sandbox.appendChild(rabbitDiv);
    sandbox.appendChild(carrotDiv);



    formfields.appendChild(selectAlgorithm);
    formfields.appendChild(formFiledsButtons);
    formFiledsButtons.appendChild(calculatePathButton);
    formFiledsButtons.appendChild(resetButton);
    formFiledsButtons.appendChild(clearWallsButton);
    
    rabbitDiv.addEventListener('click', () =>{
        if(currentBrush == "empty" && rabbitDiv.used == false){
            rabbitDiv.used = true;
            document.body.style.cursor = `url("img/rabb.svg"), auto`;
            brushBusy = true;
            currentBrush = "rabbit";
            rabbitDiv.classList.add("emoji_holders");
            rabbitDiv.classList.remove("rabbit_image");
        }
        else if(currentBrush == "rabbit"){
            rabbitDiv.classList.remove("emoji_holders");
            rabbitDiv.classList.add("rabbit_image");
            document.body.style.cursor = "auto";
            currentBrush = "empty";
            rabbitDiv.used = false;
        }
    });

    carrotDiv.addEventListener('click', () =>{
        if(currentBrush == "empty" && carrotDiv.used == false){
            carrotDiv.used = true;
            document.body.style.cursor = `url("img/carr.svg"), auto`;
            brushBusy = true;
            currentBrush = "carrot";
            carrotDiv.classList.add("emoji_holders");
            carrotDiv.classList.remove("carrot_image");
        }
        else if(currentBrush == "carrot"){
            carrotDiv.classList.remove("emoji_holders");
            carrotDiv.classList.add("carrot_image");
            document.body.style.cursor = "auto";
            currentBrush = "empty";
            carrotDiv.used = false;
        }
    });

    brushDiv.addEventListener('click', () =>{
        if(currentBrush == "empty"){
            document.body.style.cursor = `url("img/bruss.svg"), auto`;
            brushBusy = true;
            currentBrush = "brush";
            brushDiv.classList.add("emoji_holders");
            brushDiv.classList.remove("brush_image");
        }
        else if(currentBrush == "brush"){
            brushDiv.classList.remove("emoji_holders");
            brushDiv.classList.add("brush_image");
            document.body.style.cursor = "auto";
            currentBrush = "empty";
        }
        
    });


    let legend = document.createElement('div')
    legend.classList.add('legend')
    formfields.appendChild(legend);

    let colors = ['#f2f7f2', '#006400', '#EAEA92', '#8B0000', '#0B2027']
    let labels = ['Unvisited', 'Visited', 'To be visited', 'Final path', 'Wall']

    let legendItem
    let colorItem
    let labelItem

    colors.forEach((e,index) =>{
        legendItem = document.createElement('div')
        legendItem.classList.add('legendItem')
        legend.appendChild(legendItem)

        colorItem = document.createElement('div')
        colorItem.classList.add('colorItem')
        colorItem.style.backgroundColor = e
        legendItem.appendChild(colorItem)

        labelItem = document.createElement('label')
        labelItem.classList.add('labelItem')
        labelItem.innerHTML = labels[index]
        legendItem.appendChild(labelItem)
    })
}


var brushBusy = false;
var currentBrush = "empty";


function nadjiPut(){

    let x1 = document.querySelector(".start");
    let y1 = document.querySelector(".end");

    
    console.log(x1, y1);

    switch(document.querySelector(".cselect").value){
        case "DFS":
            DFS(x1,y1)
            break;
        case "BFS":
            BFS(x1,y1)
            break;
        case "A*":
            Astar(x1,y1)
            break;
        case "Bidirectional":
            Bidirectional(x1,y1);
            break;
        default:
            alert("Nije pronadjen select element!");
    }

}

//Algorithms
//DFS
async function DFS(start, target){
    let stack = []
    stack.push(start)
    start.visited = true;
    let current = null
    let prev
    while(stack.length > 0){
        console.log(stack[stack.length-1]);
        prev = current
        current = stack.pop()
        current.parent = prev
        await wait(20)
        current.style.backgroundColor='#006400'//"darkgreen";
        // current.style.border ='1px solid #005400'//"darkgreen";

        if(current == target){
            console.log('targetFound')
            await colorBFSPath(target)
            break;
        }

        let left = board[current.x]?.[current.y-1]
        let right = board[current.x]?.[current.y+1]
        let up = board[current.x-1]?.[current.y]
        let down = board[current.x+1]?.[current.y]


        if(right && !right.wall && !right.visited){
            right.visited = true
            // await wait(20)
            right.style.backgroundColor="#eaea92"
            // right.style.border="1px solid #de9c57"
            stack.push(right)
            // right.parent = current
        }
        if(left && !left.wall && !left.visited){
            left.visited=true;
            // await wait(20)
            left.style.backgroundColor="#eaea92"
            stack.push(left);
            // left.parent = current;
        }
        if(down && !down.wall && !down.visited){
            down.visited=true;
            // await wait(20)
            down.style.backgroundColor="#eaea92"
            stack.push(down)
            // down.parent = current;
        }
        if(up && !up.wall && !up.visited){
            up.visited=true;
            // await wait(20)
            up.style.backgroundColor="#eaea92"
            stack.push(up);
            // up.parent = current;
        }
    }
}
//BFS
async function BFS(start, target){

    const queue = []
    queue.push(start);

    while (queue.length > 0){
        await wait(20);
        let current  = queue.shift()

        current.visited = true;
        current.style.backgroundColor = "darkgreen"

        if(current == target){
            colorBFSPath(target)
            break;
        }

        let left = board[current.x]?.[current.y-1]
        let right = board[current.x]?.[current.y+1]
        let up = board[current.x-1]?.[current.y]
        let down = board[current.x+1]?.[current.y]


        if(left && !left.wall && !left.visited){
            left.visited = true;
            left.style.backgroundColor="#eaea92"
            queue.push(left);
            left.parent = current;
        }
            
        if(right && !right.wall && !right.visited){
            right.visited = true
            right.style.backgroundColor="#eaea92"
            queue.push(right)
            right.parent = current
        }
            
        if(up && !up.wall && !up.visited){
            up.visited=true;
            up.style.backgroundColor="#eaea92"
            queue.push(up);
            up.parent = current;
        }

        if(down && !down.wall && !down.visited){
            down.visited=true;
            down.style.backgroundColor="#eaea92"
            queue.push(down)
            down.parent = current;
        }


        
    }


}
//ASTAR Search
async function Astar(start, target){

    const starQueue  = [];
    starQueue.push(start);

    while (starQueue.length > 0){
        await wait(10);
        let current  = starQueue.shift()

        current.visited = true;
        current.style.backgroundColor = "darkgreen"

        if(current == target){
            colorBFSPath(target)
            break;
        }

        let left = board[current.x]?.[current.y-1]
        let right = board[current.x]?.[current.y+1]
        let up = board[current.x-1]?.[current.y]
        let down = board[current.x+1]?.[current.y]

        if(left && !left.wall && !left.visited){
            left.visited = true;
            left.style.backgroundColor="#eaea92"
            starQueue.push(left);
            left.parent = current;
        }
        
        if(right && !right.wall && !right.visited){
            right.visited = true;
            right.style.backgroundColor="#eaea92"
            starQueue.push(right);
            right.parent = current;
        }
            
        if(up && !up.wall && !up.visited){
            up.visited=true;
            up.style.backgroundColor="#eaea92"
            starQueue.push(up);
            up.parent = current;
        }

        if(down && !down.wall && !down.visited){
            down.visited=true;
            down.style.backgroundColor="#eaea92"
            starQueue.push(down)
            down.parent = current;
        }
        
        //funkcija za preuredjenje niza
        astarPreuredi(starQueue, target);
    }

    console.log("Gotovo");
}
function astarPreuredi(starQueue, target){
    console.log("length:" + starQueue.length);
    let best = 1000;
    let temp;
    let xDiff, yDiff, currDiff;
    starQueue.forEach((el, index)=>{
        xDiff =  Math.abs(target.x - el.x);
        yDiff = Math.abs(target.y - el.y);
        currDiff = xDiff + yDiff;
        if(currDiff < best){
            temp = index;
            best = currDiff;
        }
    })
    if(temp != 0)
        [starQueue[0], starQueue[temp]] = [starQueue[temp], starQueue[0]];
}
//Bidirecitonal
async function Bidirectional(start,target){

    const queueOne = []
    const queueTwo = []
    var biPathFound = false;
    var biPathSwitch = false;
    
    start.parent = null;
    target.parent = null;
    queueOne.push(start);
    queueTwo.push(target);

    while(!biPathFound){
        await wait(10);
        let current;
        if(biPathSwitch){
            current = queueOne.shift()
            current.visited = true;
            current.style.backgroundColor = "darkgreen"

            let left = board[current.x]?.[current.y-1]
            let right = board[current.x]?.[current.y+1]
            let up = board[current.x-1]?.[current.y]
            let down = board[current.x+1]?.[current.y]

            if(left && !left.wall && !left.visited){
                left.visited=true;
                if(left.visited2 == true){
                    console.log("Sreli su se!");
                    drawBiPath(left, current);
                    biPathFound = true;
                    break;
                }
                left.parent = current;
                left.style.backgroundColor="#eaea92"

                queueOne.push(left);
            }
            //desno
            if(right && !right.wall && !right.visited){
                right.visited = true;
                if(right.visited2 == true){
                    console.log("Sreli su se!");
                    drawBiPath(right, current);
                    biPathFound = true;

                    break;
                }
                right.parent = current;
                right.style.backgroundColor="#eaea92"

                queueOne.push(right);
            }            
            //gore
            if(up && !up.wall && !up.visited){
                up.visited = true;
                if(up.visited2 == true){
                    console.log("Sreli su se!");
                    drawBiPath(up, current);
                    biPathFound = true;

                    break;
                }
                up.parent = current;
                up.style.backgroundColor="#eaea92"

                queueOne.push(up);
            }
            //dole
            if(down && !down.wall && !down.visited){
                down.visited = true;
                if(down.visited2 == true){
                    console.log("Sreli su se !:)")
                    drawBiPath(down, current);
                    biPathFound = true;
                    
                    break;
                }
                down.parent = current;
                down.style.backgroundColor="#eaea92"

                queueOne.push(down);
            }

        }
        else{
            current = queueTwo.shift()

            current.visited2 = true;
            current.style.backgroundColor = "darkgreen"

            let left = board[current.x]?.[current.y-1]
            let right = board[current.x]?.[current.y+1]
            let up = board[current.x-1]?.[current.y]
            let down = board[current.x+1]?.[current.y]
            //levo

            if(left && !left.wall && !left.visited2){
                left.visited2=true;
                if(left.visited == true){
                    console.log("Sreli su se!");
                    drawBiPath(left, current);
                    biPathFound = true;

                    break;
                }
                left.parent = current;
                left.style.backgroundColor="#eaea92"

                queueTwo.push(left);
            }
            //desno
            if(right && !right.wall && !right.visited2){
                right.visited2 = true;
                if(right.visited == true){
                    console.log("Sreli su se!");
                    drawBiPath(right, current);
                    biPathFound = true;

                    break;
                }
                right.parent = current;
                right.style.backgroundColor="#eaea92"

                queueTwo.push(right);
            }            
            //gore
            if(up && !up.wall && !up.visited2){
                up.visited2 = true;
                if(up.visited == true){
                    console.log("Sreli su se!");
                    drawBiPath(up, current);
                    biPathFound = true;

                    break;
                }
                up.parent = current;
                up.style.backgroundColor="#eaea92"

                queueTwo.push(up);
            }
            //dole
            if(down && !down.wall && !down.visited2){
                down.visited2 = true;
                if(down.visited == true){
                    console.log("Sreli su se !:)")
                    drawBiPath(down, current);
                    biPathFound = true;

                    break;
                }
                down.parent = current;
                down.style.backgroundColor="#eaea92"

                queueTwo.push(down);
            }
        }
        biPathSwitch = !biPathSwitch;
    }
    console.log("GOTOV");
    
}

//Color path
async function drawBiPath(one, two){
    one.style.backgroundColor = "darkred";
    two.style.backgroundColor = "darkred";
    while(one.parent != null || two.parent != null){
        if(one.parent != null){
            await wait(20)
            one = one.parent;
            one.style.backgroundColor = "darkred";
        }
        if(two.parent != null){
            await wait(20)
            two = two.parent;
            two.style.backgroundColor = "darkred";
        }

    }


}
async function colorBFSPath(target){
    target.style.backgroundColor = "darkred"
    target.classList.add('growAndShrink')
    while(target.parent != null){
        await wait(40)

        target = target.parent;
        target.style.backgroundColor = "darkred";
        // target.style.border = "1px solid #270202";
        target.classList.add('growAndShrink')

    }
    target.classList.add('growAndShrink')

}
//Wait
async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function resetColor(){
    board.forEach(s=>{
        s.forEach(e=>{

            e.wall ? e.style.backgroundColor = "#0B2027" : e.style.backgroundColor = "#F2F7F2";
            e.classList.remove('growAndShrink')
            e.visited = false;
            e.visited = false;
            e.visited2 = false;
        })
    })
}

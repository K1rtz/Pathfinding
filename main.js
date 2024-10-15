const size = 30
let board = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
              [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ]
;

const array = [];
var pathFound = false;
var pressed = false;
createGrid();

function createGrid(){
    for(let r = 0; r < size; r++){
        for(let c=0; c<size; c++){
            let tile = document.createElement("div");
            tile.id = r*size+c;
            //tile.innerHTML = board[r][c];
            //tile.innerHTML = "🐇"
            tile.broj = board[r][c];
            tile.classList.add("tile");
            tile.posecen = false;
            tile.parent = null;
            tile.posecenOne = false;
            tile.posecenTwo = false;
            tile.x = r;
            tile.y = c;
            //tile.pressed = false;
            tile.addEventListener('mousedown', e =>{
                e.preventDefault();
                pressed = true;
                if(tile.innerHTML!="🐇" && tile.innerHTML!="🥕" && tile.broj != "0"){
                    
                    switch(currentBrush){
                        case "rabbit":
                            tile.innerHTML = "🐇";
                            currentBrush = "empty";
                            document.body.style.cursor = "auto";
                            tile.classList.add("start");
                            break;
                        case "carrot":
                            tile.innerHTML = "🥕";
                            currentBrush = "empty";
                            document.body.style.cursor = "auto";
                            tile.classList.add("end");
                            break;
                        case "brush":
                            tile.style.backgroundColor = "black";
                            //tile.innerHTML="🗻";
                            tile.broj = "0";
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
                if(pressed && currentBrush == "brush"){
                    if(tile.innerHTML!="🐇" && tile.innerHTML!="🥕"){
                        tile.style.backgroundColor = "black";
                        //tile.innerHTML="🗻";
                        tile.broj = "0";
                    }
                }
            })
            tile.addEventListener('mouseup', e=>{
                pressed = false;
            })

            tile.broj == 0 ? tile.vrstaBloka = "wall" : tile.vrstaBloka = "path";
            tile.vrstaBloka == "wall" ? tile.style.backgroundColor = "black" : tile.style.backgroundColor = "darkgrey";

            document.getElementById("board").appendChild(tile);
        }
    }
    createForm();
}



function start(){
    let x = document.getElementById("19");
    let y = document.getElementById("304");
    setTimeout(DFS(x,y),1000);
}

function createForm(){
    let form = document.createElement("div");
    form.classList.add("cform")
    document.getElementById("dfsform").appendChild(form);
    let formfields = document.createElement("div");
    formfields.classList.add("cformfields");

    document.getElementById("dfsformSettings").appendChild(formfields);



    let selectAlgorithm = document.createElement("select");
    selectAlgorithm.classList.add("cselect");
    const algorithmOptions = ["DFS", "BFS", "Astar", "Bidirectional"];
    algorithmOptions.forEach(el =>{
        const optionEl = document.createElement("option");
        optionEl.value = el;
        optionEl.innerHTML = el;
        selectAlgorithm.appendChild(optionEl);
    })
    formfields.appendChild(selectAlgorithm);

    let formFiledsButtons = document.createElement("div");
    formfields.appendChild(formFiledsButtons);
    formFiledsButtons.classList.add("formFieldsButtons");

    let resetButton = document.createElement("button");
    resetButton.classList.add("ccalcPathButton");
    resetButton.innerHTML = "Reset"
    resetButton.addEventListener('click', resetColor);
    formFiledsButtons.appendChild(resetButton);

    let calculatePathButton = document.createElement("button");
    calculatePathButton.classList.add("ccalcPathButton");
    calculatePathButton.innerHTML = "Find path"
    calculatePathButton.addEventListener('click', nadjiPut);
    formFiledsButtons.appendChild(calculatePathButton);

    let rabbitDiv = document.createElement("div");
    let carrotDiv = document.createElement("div");
    let brushDiv = document.createElement("div");
    rabbitDiv.classList.add("rabbit_image");
    carrotDiv.classList.add("carrot_image");
    brushDiv.classList.add("brush_image");

    rabbitDiv.used = false;
    carrotDiv.used = false;

    let sandboxsettings = document.getElementById("dfsformSandbox");

    let pomocni = document.createElement("div");
    sandboxsettings.appendChild(pomocni);
    pomocni.classList.add("sandbox");

    pomocni.appendChild(brushDiv);
    pomocni.appendChild(rabbitDiv);
    pomocni.appendChild(carrotDiv);

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




}


var brushBusy = false;
var currentBrush = "empty";


function nadjiPut(){
    
    //let x = document.querySelector("#inStart");
    //let y = document.querySelector("#inEnd");

    //let x1 = document.getElementById(x.value);
    //let y1 = document.getElementById(y.value);

    //let z = document.querySelector(".cselect")

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
        case "Astar":
            Astar(x1,y1)
            break;
        case "Bidirectional":
            Bidirectional(x1,y1);
            break;
        default:
            alert("Nije pronadjen select element!");
    }


    //DFS(x1,y1);
    //BFS(x1, y1);
    //Astar(x1, y1);
}


//Algoritmi
//Depth First Search
async function DFS(start, target){
    console.log("Posecujemo polje: " + start.id)
    start.posecen = true;
    
    await wait(10);

    if(!pathFound)
    {
    array.push(start);

    start.style.backgroundColor="darkgreen";
    if(start.id === target.id){
        console.log("Kraj!")
        console.log(array);
        colorPath(array);
        pathFound = true;
        return start;
    }

    let left, right, up, down;
    if(start.id%size-1 >= 0){
        left = document.getElementById(parseInt(start.id) - 1)
    }
        
    if(left && left.broj !=0 && left.posecen == false)
        await DFS(left, target);


    if(start.id%size+1 <=size){
        right = document.getElementById(parseInt(start.id) + 1)
    }
    if(right != null && right.broj != 0 && right.posecen == false){
        await DFS(right, target);
    }
        
    up = document.getElementById(parseInt(start.id) - size)
    if(up && up.broj != 0 && up.posecen == false)
        await DFS(up, target);

    down = document.getElementById(parseInt(start.id) + size)
    if(down && down.broj != 0 && down.posecen == false)
        await DFS(down, target);


    if(left.posecen == true || left.broj == 0 && right.posecen == true || right.broj == 0 && up.posecen == true || up.broj == 0 && down.posecen == true || down.broj == 0)
        array.pop();


    //console.log("Nema kraja :(");
    return;
    }
    return;
}
//Breadth First Search
const queue = [];
async function BFS(start, target){

    queue.push(start);
    while (queue.length > 0){
        await wait(10);
        let current  = queue.shift()
        current.posecen = true;
        current.style.backgroundColor = "darkgreen"

        let left, right, up, down;
        if(current.id%size-1 >= 0){
            left = document.getElementById(parseInt(current.id) - 1)
        }
        if(left && left.broj !=0 && left.posecen == false){
            left.posecen=true;
            queue.push(left);
            left.parent = current;
        }
            

        if(current.id%size+1 <=size){
            right = document.getElementById(parseInt(current.id) + 1)
        }
        if(right != null && right.broj != 0 && right.posecen == false){
            right.posecen = true;
            queue.push(right);
            right.parent = current;
        }
            
        up = document.getElementById(parseInt(current.id) - size)
        if(up && up.broj != 0 && up.posecen == false){
            up.posecen=true;
            queue.push(up);
            up.parent = current;
        }

        down = document.getElementById(parseInt(current.id) + size)
        if(down && down.broj != 0 && down.posecen == false){
            down.posecen=true;
            queue.push(down)
            down.parent = current;
        }

        if(current == target){
            colorBFSPath(target)
            break;
        }
        
    }
    console.log("Gotovo");
}
//ASTAR Search
const starQueue = [];
async function Astar(start, target){

    starQueue.push(start);

    while (starQueue.length > 0){
        await wait(10);//PROBLEM:kada se udje u while shiftovan element je vec posecen, kako je zavrsio u nizu ako je posecen?
        let current  = starQueue.shift()
        console.log(current);
        console.log(current.posecen);
        current.posecen = true;
        current.style.backgroundColor = "darkgreen"

        let left, right, up, down;
        if(current.id%size-1 >= 0){
            left = document.getElementById(parseInt(current.id) - 1)
        }
        if(left && left.broj !=0 && left.posecen == false){
            left.posecen = true;
            starQueue.push(left);
            left.parent = current;
        }
            

        if(current.id%size+1 <=size){
            right = document.getElementById(parseInt(current.id) + 1)
        }
        if(right && right.broj != 0 && right.posecen == false){
            right.posecen = true;
            starQueue.push(right);
            right.parent = current;
        }
            
        up = document.getElementById(parseInt(current.id) - size)
        if(up && up.broj != 0 && up.posecen == false){
            up.posecen=true;
            starQueue.push(up);
            up.parent = current;
        }

        down = document.getElementById(parseInt(current.id) + size)
        if(down && down.broj != 0 && down.posecen == false){
            down.posecen=true;
            starQueue.push(down)
            down.parent = current;
        }

        if(current == target){
            colorBFSPath(target)
            break;
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
    //console.log(starQueue[0])
    //console.log(starQueue[temp])
    console.log(temp);
    if(temp != 0)
    [starQueue[0], starQueue[temp]] = [starQueue[temp], starQueue[0]];
}
//Bidirection Search
const bQueueOne = []
const bQueueTwo = []
var biPathFound = false;
var biPathSwitch = false;
async function Bidirectional(start, target){
  

    start.parent = null;
    target.parent = null;
    bQueueOne.push(start);
    bQueueTwo.push(target);

    while(!biPathFound){
        await wait(10);
        let current;
        if(biPathSwitch){
            current = bQueueOne.shift()
            current.posecenOne = true;
            current.style.backgroundColor = "darkgreen"

            let left, right, up, down;
            //levo
            if(current.id%size-1 >= 0){
                left = document.getElementById(parseInt(current.id) - 1)
            }
            if(left && left.broj !=0 && left.posecenOne == false){
                left.posecenOne=true;
                if(left.posecenTwo == true){
                    console.log("Sreli su se!");
                    drawBiPath(left, current);
                    biPathFound = true;
                    break;
                }
                left.parent = current;
                bQueueOne.push(left);
            }
            //desno
            if(current.id%size+1 <=size){
                right = document.getElementById(parseInt(current.id) + 1)
            }
            if(right != null && right.broj != 0 && right.posecenOne == false){
                right.posecenOne = true;
                if(right.posecenTwo == true){
                    console.log("Sreli su se!");
                    drawBiPath(right, current);
                    biPathFound = true;

                    break;
                }
                right.parent = current;
                bQueueOne.push(right);
            }            
            //gore
            up = document.getElementById(parseInt(current.id) - size)
            if(up && up.broj != 0 && up.posecenOne == false){
                up.posecenOne = true;
                if(up.posecenTwo == true){
                    console.log("Sreli su se!");
                    drawBiPath(up, current);
                    biPathFound = true;

                    break;
                }
                up.parent = current;
                bQueueOne.push(up);
            }
            //dole
            down = document.getElementById(parseInt(current.id) + size)
            if(down && down.broj != 0 && down.posecenOne == false){
                down.posecenOne = true;
                if(down.posecenTwo == true){
                    console.log("Sreli su se !:)")
                    drawBiPath(down, current);
                    biPathFound = true;
                    
                    break;
                }
                down.parent = current;
                bQueueOne.push(down);
            }

        }
        else{
            current = bQueueTwo.shift()

            current.posecenTwo = true;
            current.style.backgroundColor = "darkgreen"

            let left, right, up, down;
            //levo
            if(current.id%size-1 >= 0){
                left = document.getElementById(parseInt(current.id) - 1)
            }
            if(left && left.broj !=0 && left.posecenTwo == false){
                left.posecenTwo=true;
                if(left.posecenOne == true){
                    console.log("Sreli su se!");
                    drawBiPath(left, current);
                    biPathFound = true;

                    break;
                }
                left.parent = current;
                bQueueTwo.push(left);
            }
            //desno
            if(current.id%size+1 <=size){
                right = document.getElementById(parseInt(current.id) + 1)
            }
            if(right != null && right.broj != 0 && right.posecenTwo == false){
                right.posecenTwo = true;
                if(right.posecenOne == true){
                    console.log("Sreli su se!");
                    drawBiPath(right, current);
                    biPathFound = true;

                    break;
                }
                right.parent = current;
                bQueueTwo.push(right);
            }            
            //gore
            up = document.getElementById(parseInt(current.id) - size)
            if(up && up.broj != 0 && up.posecenTwo == false){
                up.posecenTwo = true;
                if(up.posecenOne == true){
                    console.log("Sreli su se!");
                    drawBiPath(up, current);
                    biPathFound = true;

                    break;
                }
                up.parent = current;
                bQueueTwo.push(up);
            }
            //dole
            down = document.getElementById(parseInt(current.id) + size)
            if(down && down.broj != 0 && down.posecenTwo == false){
                down.posecenTwo = true;
                if(down.posecenOne == true){
                    console.log("Sreli su se !:)")
                    drawBiPath(down, current);
                    biPathFound = true;

                    break;
                }
                down.parent = current;
                bQueueTwo.push(down);
            }
        }
        biPathSwitch = !biPathSwitch;
    }
    console.log("GOTOV");
    
}


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
    while(target.parent != null){
        await wait(20)
        target = target.parent;
        target.style.backgroundColor = "darkred";
    }
}




async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//Coloring
function colorPath(x){
    x.forEach(el =>{
        el.style.backgroundColor = "darkred";
    })
}
function resetColor(){
    var list = document.querySelectorAll(".tile");
    list.forEach(e=>{
        e.broj == 0 ? e.style.backgroundColor = "black" : e.style.backgroundColor = "darkgrey";
        e.posecen = false;
        e.posecenOne = false;
        e.posecenTwo = false;
    })
    pathFound = false;
    array.splice(0, array.length);
    queue.splice(0, queue.length);
    
    starQueue.splice(0, starQueue.length);

    bQueueOne.splice(0, bQueueOne.length);
    bQueueTwo.splice(0, bQueueTwo.length);
    biPathFound = false;


}

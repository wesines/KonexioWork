var prompt =require ('prompt')
prompt.start();
var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

var rover = {
    direction: "N",
    X: 0,
    Y: 0,
    travelLog: []
}
/***  turn right le Rover            */

function turnRight(rover) {
    switch (rover.direction) {
        case "N": rover.direction = "E"; break;//console.log("direction du rover", rover.direction); 
        case "E": rover.direction = "S"; break;//console.log("direction du rover", rover.direction); 
        case "S": rover.direction = "W"; break;//console.log("direction du rover", rover.direction); 
        case "W": rover.direction = "N"; break;//console.log("direction du rover", rover.direction); 

    }
    grid[rover.X][rover.Y] = rover.direction;

}
/***  turn left le Rover            */

function turnLeft(rover) {
    switch (rover.direction) {
        case "N": rover.direction = "W"; break;//console.log("direction du rover", rover.direction); 
        case "E": rover.direction = "N";break; // console.log("direction du rover", rover.direction); 
        case "S": rover.direction = "E"; break;//console.log("direction du rover", rover.direction); 
        case "W": rover.direction = "S";break; //console.log("direction du rover", rover.direction); 

    }
    grid[rover.X][rover.Y] = rover.direction;

}


/***  déplacer le Rover        */

function moveForward(rover) {

    var exX = rover.X;
    var exY = rover.Y;
 
    if (rover.direction === "N") {
        if (rover.Y === 0) {
            console.log("Vous ne pouvez pas se dirigier vers le Nord, veuillez changer de direction")
        } else {
            rover.travelLog.push(x = rover.X, y = rover.Y)
            rover.Y -= 1
           // console.log(`la position du rover est ${rover.X},${rover.Y}`)
        }
    }
    else if (rover.direction === "E") {
        if (rover.X === 9) {
            if(rover.Y===9){
                rover.X=0
                rover.Y=0
            }else{
                rover.Y+=1
            }
        }else{
            rover.X+=1
        }
     //   console.log(`la position du rover est ${rover.X},${rover.Y}`)
    }
    else if (rover.direction === "S") {
        if (rover.Y === 9) {
            console.log("Vous ne pouvez pas se dirigier vers le Sud, veuillez changer de direction")
        } else {
            rover.travelLog.push(x = rover.X, y = rover.Y)
            rover.Y += 1
           // console.log(`la position du rover est ${rover.X},${rover.Y}`)
        }
    }
    else if (rover.direction === "W") {
        if (rover.X === 0) {
            console.log("Vous ne pouvez pas se dirigier vers le West, veuillez changer de direction")
        } else {
            rover.travelLog.push(x = rover.X, y = rover.Y)
            rover.X -= 1
          //  console.log(`la position du rover est ${rover.X},${rover.Y}`)
        }
    }
    grid[exX][exY] = ' ';
    grid[rover.X][rover.Y] = rover.direction;
}
/***  piloter le Rover            */
function pilotRover(str) {
    str = str.split("")
   
    str.map(function (item) {
        switch (item) {
            case "l":
                turnLeft(rover)
              //  console.log(`la position du rover est ${rover.X},${rover.Y}`);
                break;
            case "r":
                turnRight(rover)
             //   console.log(`la position du rover est ${rover.X},${rover.Y}`)
                break;
            case "f":
                moveForward(rover)
              //  console.log(`la position du rover est ${rover.X},${rover.Y}`)
                break;
            case "b":
                moveBackward(rover)
              //  console.log(`la position du rover est ${rover.X},${rover.Y}`);
                break;
            default: console.log("Cette lettre n'est pas incluse dans le pilotage du Rover");
                break;
        }
        grid[rover.X][rover.Y] = rover.direction;

    })

}
/*******reculer  */

function moveBackward(rover) {

    var exX = rover.X;
    var exY = rover.Y;
 
    if (rover.direction === "N") {
        if (rover.Y === 9) {
            console.log("Vous ne pouvez pas reculer vers le Nord, veuillez changer de direction")
        }
        else{
            rover.travelLog.push(x = rover.X, y = rover.Y)
            rover.Y += 1
           // console.log(`la position du rover est ${rover.X},${rover.Y}`)
        }
    }
    else if (rover.direction === "E") {
        if (rover.X === 0) {
                console.log("Vous ne pouvez pas reculer vers l'Est, veuillez changer de direction")
        }
        else{
                rover.X-=1
       }
        
     //   console.log(`la position du rover est ${rover.X},${rover.Y}`)
    }
    else if (rover.direction === "S") {
        if (rover.Y === 0) {
            console.log("Vous ne pouvez pas se dirigier vers le Sud, veuillez changer de direction")
        } else {
            rover.travelLog.push(x = rover.X, y = rover.Y)
            rover.Y -= 1
           // console.log(`la position du rover est ${rover.X},${rover.Y}`)
        }
    }
    else if (rover.direction === "W") {
        if (rover.X === 9) {
            if(rover.Y===9){
                rover.X=0
                rover.Y=0
            }else{
                rover.Y+=1
            }
        } else {
            rover.travelLog.push(x = rover.X, y = rover.Y)
            rover.X += 1
          //  console.log(`la position du rover est ${rover.X},${rover.Y}`)
        }
    }
    grid[exX][exY] = ' ';
    grid[rover.X][rover.Y] = rover.direction;
}


prompt.get("str",function(err,res){
    console.log("res.str",res.str)
        grid[rover.X][rover.Y] = rover.direction;
        console.log(grid.join('\n'));
        pilotRover(res.str)
        console.log(grid.join('\n'));
    
})


// turnRight(rover)
// moveForward(rover)
// grid[rover.X][rover.Y] = rover.direction;
// console.log(grid.join('\n'));
// pilotRover("flfblbfclbflfbrlrlblrfrbflfl")
// console.log(grid.join('\n'));

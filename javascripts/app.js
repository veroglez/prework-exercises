// Rover Object Goes Here
// ======================
var rover1={
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0,0]],
  icon: "r1"
};
var rover2={
  direction: "N",
  x: 9,
  y: 0,
  travelLog: [[9,0]],
  icon: "r2"
};
var rover3={
  direction: "N",
  x: 0,
  y: 9,
  travelLog: [[0,9]],
  icon: "r3"
};
var board = [
  ['r1',' ',' ',' ',' ',' ',' ',' ',' ','r2'],
  [' ','X',' ',' ',' ','X',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ','X',' ','X',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  ['X',' ',' ',' ','X',' ','X',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  ['r3',' ',' ',' ',' ',' ',' ',' ',' ',' ']];
// ======================
showMap();
console.log("Orientation r1: " + rover1.direction);
console.log("Orientation r2: " + rover2.direction);
console.log("Orientation r3: " + rover3.direction);


function move(command, rover){
  for (var i = 0; i<command.length; i++){
      switch (command[i]){
        case "l":
          turnLeft(rover);
          rover.travelLog.push([rover.x, rover.y]);
          updateMap(rover);
          break;
        case "r":
          turnRight(rover);
          rover.travelLog.push([rover.x, rover.y]);
          updateMap(rover);
          break;
        case "f":
          moveForward(rover);
          updateMap(rover);
          break;
        case "b":
          moveBackward(rover);
          updateMap(rover);
          break;
        default:
          console.log("Nothing happens");
      }
    }
    console.log("Positions where the rover has been: ");
    console.log("Initial position: "+ "x=" + rover.travelLog[0][0] + " y=" + rover.travelLog[0][1]);
    for (i = 1; i<rover.travelLog.length; i++){
      console.log("Movement " + i + ": " + "x=" + rover.travelLog[i][0] + " y=" + rover.travelLog[i][1]);
    }
    console.log("Orientation: " + rover.direction);
    showMap();

}


function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "W";
    break;
    case "W":
      rover.direction = "S";
    break;
    case "S":
      rover.direction = "E";
    break;
    case "E":
      rover.direction = "N";
    break;
  }
  //console.log("Direction: " + rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "E";
    break;
    case "E":
      rover.direction = "S";
    break;
    case "S":
      rover.direction = "W";
    break;
    case "W":
      rover.direction = "N";
    break;
  }
  //console.log("Direction: " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");
  switch(rover.direction){
    case "N":
      if (rover.y === 0){
        showBoundary();
      }else if(board[rover.y-1][rover.x] != " "){
        showObstacle(rover.x, rover.y-1);
      }else{
        rover.y -= 1;
        rover.travelLog.push([rover.x, rover.y]);
      }
    break;
    case "S":
      if (rover.y === 9){
        showBoundary();
      }else if(board[rover.y+1][rover.x] != " "){
        showObstacle(rover.x, rover.y+1);
      }else{
        rover.y += 1;
        rover.travelLog.push([rover.x, rover.y]);
      }
    break;
    case "W":
      if (rover.x === 0){
        showBoundary();
      }else if(board[rover.y][rover.x-1] != " "){
        showObstacle(rover.x-1, rover.y);
      }else{
        rover.x -= 1;
        rover.travelLog.push([rover.x, rover.y]);
      }
    break;
    case "E":
      if (rover.x === 9){
        showBoundary();
      }else if(board[rover.y][rover.x+1] != " "){
        showObstacle(rover.x+1, rover.y);
      }else{
        rover.x += 1;
        rover.travelLog.push([rover.x, rover.y]);
      }
    break;
  }
  //console.log("Position: " + rover.x + "," +rover.y);

}

function moveBackward(rover){
  console.log("moveBackward was called");
  switch(rover.direction){
    case "N":
      if (rover.y === 9){
        showBoundary();
      }else if(board[rover.y+1][rover.x] != " "){
        showObstacle(rover.x, rover.y+1);
      }else{
        rover.y += 1;
        rover.travelLog.push([rover.x, rover.y]);
      }
    break;
    case "S":
      if (rover.y === 0){
        showBoundary();
      }else if(board[rover.y-1][rover.x] != " "){
        showObstacle(rover.x, rover.y-1);
      }else{
        rover.y -= 1;
        rover.travelLog.push([rover.x, rover.y]);
      }
    break;
    case "W":
      if (rover.x === 9){
        showBoundary();
      }else if(board[rover.y][rover.x+1] != " "){
        showObstacle(rover.x+1, rover.y);
      }else{
        rover.x += 1;
        rover.travelLog.push([rover.x, rover.y]);
      }
    break;
    case "E":
      if (rover.x === 0){
        showBoundary();
      }else if(board[rover.y][rover.x-1] != " "){
        showObstacle(rover.x-1, rover.y);
      }else{
        rover.x -= 1;
        rover.travelLog.push([rover.x, rover.y]);
      }
    break;
  }
  //console.log("Position: " + rover.x + "," +rover.y);

}
// Function to show boundary alert
function showBoundary(){
  console.log("The robot cannot move forward! There is a boundary!");
}
// Function to show obstacle alert
function showObstacle(x,y){
  if(board[y][x] === "X"){
    console.log("Stop!! There's an obstacle!");
  }else if(board[y][x] === "r1" || board[y][x] === "r2" || board[y][x] === "r3" ){
    console.log("Stop!! There's other Rover!");
  }
}
// Function to show the map
function showMap(){
  for (i = 0; i<board.length; i++){
    console.log(board[i]);
  }
}
// Function to update the map with the Rovers positions
function updateMap(rover){
  for(var i = 0; i<board.length; i++){
    for(var j = 0; j<board.length; j++){
      if(board[i][j] === rover.icon){
        board[i][j] = ' ';
      }
    }
  }
  board[rover.y][rover.x] = rover.icon;
}

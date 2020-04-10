export const gamepad = {};

/*
gamepad.field = [
  "R",  "R",  " ",  " ",  "F",  "F",  "sB",  " ",  " ",  "B",  "B",
  "R",  "R",  " ",  " ",  "F",  "eB",  "F", " ",  " ",  "B","B",
  " ",  " ",  " ",  " ",  "F",  "eB",  "F",  " ",  " ",  " ",  " ",
  " ",  " ",  " ",  " ",  "F",  "eB",  "F",  " ",  " ",  " ",  " ",
  "sR",  "F",  "F",  "F",  "F",  "eB",  "F",  "F",  "F",  "F",  "F",
  "F",  "eR",  "eR",  "eR",  "eR",  " ",  "eY",  "eY",  "eY",  "eY",  "F",
  "F",  "F",  "F",  "F",  "F",  "eG",  "F",  "F",  "F",  "F",  "sY",  
  " ",  " ",  " ",  " ",  "F",  "eG",  "F",  " ",  " ",  " ",  " ",
  " ",  " ",  " ",  " ",  "F",  "eG",  "F",  " ",  " ",  " ",  " ",
  "G",  "G",  " ",  " ",  "F",  "eG",  "F",  " ",  " ",  "Y",  "Y",
  "G", "G",  " ",  " ",  "sG",  "F",  "F",  " ",  " ",  "Y",  "Y"
];
*/

gamepad.field = [
  "R",
  "R",
  " ",
  " ",
  "F",
  "F",
  "sB",
  " ",
  " ",
  "B",
  "B",
  "R",
  "R",
  " ",
  " ",
  "F",
  "eB",
  "F",
  " ",
  " ",
  "B",
  "B",
  " ",
  " ",
  " ",
  " ",
  "F",
  "eB",
  "F",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  "F",
  "eB",
  "F",
  " ",
  " ",
  " ",
  " ",
  "sR",
  "F",
  "F",
  "F",
  "F",
  "eB",
  "F",
  "F",
  "F",
  "F",
  "F",
  "F",
  "eR",
  "eR",
  "eR",
  "eR",
  " ",
  "eY",
  "eY",
  "eY",
  "eY",
  "F",
  "F",
  "F",
  "F",
  "F",
  "F",
  "eG",
  "F",
  "F",
  "F",
  "F",
  "sY",
  " ",
  " ",
  " ",
  " ",
  "F",
  "eG",
  "F",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  "F",
  "eG",
  "F",
  " ",
  " ",
  " ",
  " ",
  "G",
  "G",
  " ",
  " ",
  "F",
  "eG",
  "F",
  " ",
  " ",
  "Y",
  "Y",
  "G",
  "G",
  " ",
  " ",
  "sG",
  "F",
  "F",
  " ",
  " ",
  "Y",
  "Y"
];

/*
Due to unwanted (thanks codesandbox!!) reformating with linebreaks after each comma - conserved as comment
gamepad.direction = [
  81,82, 0, 0,39,40, 1,0,0,51,52,
  83,84, 0, 0,38,-4, 2, 0, 0,53,54, 
  0, 0, 0, 0,37,-3, 3, 0, 0, 0, 0, 
  0, 0, 0, 0,36,-2, 4, 0, 0, 0, 0,
  31,32,33,34,35,-1, 5, 6, 7, 8, 9,
  30,-15,-14,-13,-12, 0,-4,-5,-6,-7,10,
  29,28,27,26,25,-8,15,14,13,12,11,
  0, 0, 0, 0,24,-9,16, 0, 0, 0, 0,
  0, 0, 0, 0,23,-10,17, 0, 0, 0, 0,
  71,72, 0, 0,22,-11,18, 0, 0,61,62,
  73,74, 0, 0,21,20,19, 0, 0,63,64
];*/

gamepad.direction = [
  81,
  82,
  0,
  0,
  39,
  40,
  1,
  0,
  0,
  51,
  52,
  83,
  84,
  0,
  0,
  38,
  -4,
  2,
  0,
  0,
  53,
  54,
  0,
  0,
  0,
  0,
  37,
  -3,
  3,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  36,
  -2,
  4,
  0,
  0,
  0,
  0,
  31,
  32,
  33,
  34,
  35,
  -1,
  5,
  6,
  7,
  8,
  9,
  30,
  -15,
  -14,
  -13,
  -12,
  0,
  -4,
  -5,
  -6,
  -7,
  10,
  29,
  28,
  27,
  26,
  25,
  -8,
  15,
  14,
  13,
  12,
  11,
  0,
  0,
  0,
  0,
  24,
  -9,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  23,
  -10,
  17,
  0,
  0,
  0,
  0,
  71,
  72,
  0,
  0,
  22,
  -11,
  18,
  0,
  0,
  61,
  62,
  73,
  74,
  0,
  0,
  21,
  20,
  19,
  0,
  0,
  63,
  64
];

gamepad.MAX_FIELD = 40;

//gamepad.position = 41;

gamepad.draw = function(players) {
  let tmp = [];

  //initialize empty field
  for (let i = 0; i < 121; i++) {
    if (this.direction[i] !== 0) {
      tmp.push("0");
    } else {
      tmp.push(" ");
    }
  }
  //tmp[this.direction.indexOf(this.position)]=1;

  //format field
  for (let i = 0; i < 121; i++) {
    //starting positions
    if (
      this.direction[i] === 1 ||
      this.direction[i] === 11 ||
      this.direction[i] === 21 ||
      this.direction[i] === 31
    )
      tmp[i] = "X";

    //goal
    if (this.direction[i] < 0) tmp[i] = "U";
  }

  //position players
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].position.length; j++) {
      tmp[this.direction.indexOf(players[i].position[j])] = players[i].id;
    }
  }

  //format console output
  let ret = "";
  for (let i = 0; i < 121; i++) {
    ret += tmp[i] + " ";
    if ((i + 1) % 11 === 0) {
      ret += "\n";
    }
  }

  return ret;
};

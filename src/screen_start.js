//organizes the start screen. Should ask for human/computer players via html interface

export const screen_start = {};

screen_start.human = [1, 0, 0, 0];

screen_start.div = document.getElementById("app");

screen_start.draw = function() {
  let tmp = "<form>\n";

  for (let i = 0; i < 4; i++) {
    tmp += "<label>Player " + (i + 1) + ": </label>\n";
    tmp +=
      "<select id='" +
      i +
      "' onchange='function(n=this){screen_start.updatePlayerType(n);}' name='test'>\n";
    tmp += "<option value='1'>Human</option>\n";
    tmp +=
      "<option value='0' " +
      (i !== 0 ? "selected" : "") +
      ">Computer</option>\n";
    tmp += "</select><br>\n";
  }

  tmp += "<br><br>";
  tmp += "<input type='button' id='btn_start' value='Start Game!' onclick='launchGame()'>";

  tmp += "</form>\n";

  this.div.innerHTML = tmp;

  //console.log(this.div.innerHTML);
};

screen_start.updatePlayerType = function(el) {
  screen_start.human[el.currentTarget.id] = el.currentTarget.value;
  console.log(el.currentTarget.id);
};

import { gamepad } from "./gamepad";

class Player {
  constructor(id, startPos, finishPos, waitPos, finalRow) {
    this._startPos = startPos;
    this._finishPos = finishPos; //last field before final row
    this._finalRow = finalRow; //first index of final row (4 items)
    this._waitPos = waitPos;
    this._finished = [];
    this._active = [];
    this._waiting = [];
    this._id = id;

    for (let i = 0; i < 4; i++) {
      this._waiting.push(new Character(waitPos + i));
    }
  }

  get id() {
    return this._id;
  }

  get position() {
    let ret = [];

    for (let i = 0; i < this._waiting.length; i++) {
      ret.push(this._waiting[i].position);
    }

    for (let i = 0; i < this._active.length; i++) {
      ret.push(this._active[i].position);
    }

    for (let i = 0; i < this._finished.length; i++) {
      ret.push(this._finished[i].position);
    }

    return ret;
  }

  get isActive() {
    return this._active.length;
  }

  getOut() {
    //check if there are characters left
    if (this._waiting.length > 0) {
      //take the first available one
      this._waiting.pop();
      this._active.push(new Character(this._startPos));
    }
  }

  popOut(pos) {
    let index = -1;

    index = this._active.findIndex(c => c.position === pos);

    if (index !== -1) {
      //handle indices in various positions
      this._active = this._active
        .slice(0, index)
        .concat(this._active.slice(index + 1));
      //resort _waiting-list
      for (let i = 0; i < this._waiting.length; i++)
        this._waiting[i].position = this._waitPos + i;

      //add popped character to waiting list
      this._waiting.push(new Character(this._waitPos + this._waiting.length));
    }
  }

  //Move character on pos forward x steps
  move(steps, pos = 0) {
    let index = 0;

    if (pos !== 0) {
      index = this._active.findIndex(c => c.position === pos);
    }

    if (this._active.length > 0) {
      //add steps to active player
      //if player reached final row
      if (
        this._inRange(
          this._active[index].position,
          this._active[index].position + steps,
          this._finishPos
        )
      ) {
        let tmp = this._active[index].position + steps - this._finishPos;

        //no other char on final position?
        if (!this._selfCollision(this._finalRow + tmp)) {
          this._active[index].position = this._finalRow + tmp - 1;
        }
      } else {
        if (
          (this._active[index].position < 0 &&
            this._inRange(
              this._active[index].position,
              this.finalRow + 3,
              this._active[index].position + steps
            )) ||
          this._active[index].position > 0
        )
          this._active[index].position += steps;
      }

      //compensate for pos 40 to pos 1
      if (this._active[index].position > gamepad.MAX_FIELD) {
        this._active[index].position -= gamepad.MAX_FIELD;
      }

      return this._active[index].position;
    }

    return 0;
  }

  //to Select only moveable characters, check them first
  isMovePossible(steps, pos) {
    let index = this._active.findIndex(c => c.position === pos);
    let char = this._active[index];
    let newPos = char.position + steps;

    //if move is less than the finish field
    if (!this._inRange(char.position, newPos, this._finishPos)) {
      //and no other own character is on the final spot
      if (!this._selfCollision(newPos)) {
        return true;
      } else {
        return false;
      }
    } else {
      //fits into final row?
      if (newPos <= this._finishPos + 3) {
        let tmp = newPos - this._finishPos;

        //no other char on final position?
        if (!this._selfCollision(this._finalRow + tmp)) {
          return true;
        }
      } else {
        return false;
      }
    }
  }

  _hasFinished(active_index) {}

  _selfCollision(newPos) {
    return !(
      this._active.filter(n => n.position === newPos).length === 0 &&
      this._finished.filter(n => n.position === newPos).length === 0
    );
  }
  //check if val is in range of a-b
  _inRange(a, b, val) {
    return Math.min(a, b) <= val && Math.max(a, b) >= val;
  }
}

class Character {
  constructor(position) {
    this._position = position;
  }

  get position() {
    return this._position;
  }
  set position(pos) {
    this._position = pos;
  }
}

export let players = [];
players.push(new Player(1, 31, 30, 81, -15));
players.push(new Player(2, 1, 40, 51, -4));
players.push(new Player(3, 11, 10, 61, -7));
players.push(new Player(4, 21, 20, 71, -11));

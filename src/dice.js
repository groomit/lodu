export const dice = {};

dice.count = 1;
dice.range = [1, 6];
dice.eyes = 1;
dice.roll = function() {
  this.eyes = 0;
  for (let i = 0; i < this.count; i++) {
    this.eyes +=
      Math.floor(Math.random() * (this.range[1] - this.range[0] + 1)) +
      this.range[0];
  }

  return this.eyes;
};

dice.draw = function() {
  switch (this.eyes) {
    case 1:
      return "  _____\n|       |\n|   *   |\n|       |\n  -----";
      break;
    case 2:
      return "  _____\n| *     |\n|       |\n|     * |\n  -----";
      break;
    case 3:
      return "  _____\n| *     |\n|   *   |\n|     * |\n  -----";
      break;
    case 4:
      return "  _____\n| *   * |\n|       |\n| *   * |\n  -----";
      break;
    case 5:
      return "  _____\n| *   * |\n|   *   |\n| *   * |\n  -----";
      break;
    case 6:
      return "  _____\n| *   * |\n| *   * |\n| *   * |\n  -----";
      break;
  }
};

class SnakeGame {
  constructor() {
    this.canvas = document.getElementById("game");
    this.context = this.canvas.getContext("2d");
    this.context;
    document.addEventListener("keypress", this.onKeyPress.binf);
  }
}

const game = new SnakeGame();

//gerek var mı? sil
window.onload = console.log("m");

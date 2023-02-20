document.addEventListener("DOMContentLoaded", () => {
  let gameBoard = ["", "", "", "", "", "", "", "", ""];
  const btn = document.querySelectorAll("button");
  let currentPlayer = "X";
  let winnerDeclared = false;
  const player1 = document.getElementById("player1Name");
  const player2 = document.getElementById("player2Name");
  const reset = document.getElementById("reset");

  reset.addEventListener("click", (event) => {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
  });

  function handleClick(event) {
    if (winnerDeclared) {
      return;
    }

    const clickedButton = event.target;
    const index = clickedButton.getAttribute("data-index");
    if (gameBoard[index] !== "") {
      return;
    }

    gameBoard[index] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    player1.classList.toggle("active");
    player2.classList.toggle("active");
  }

  function declareWinner(player) {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const winnerPattern = patterns.find((pattern) => {
      const [a, b, c] = pattern;
      return gameBoard[a] === player && gameBoard[b] === player && gameBoard[c] === player;
    });

    return winnerPattern ? `${player} win!` : null;
  }

  btn.forEach((button) => {
    button.addEventListener("click", (event) => {
      handleClick(event);
      for (let i = 0; i < btn.length; i++) {
        if (btn[i].id !== "reset") {
          btn[i].innerHTML = gameBoard[i];
        }
      }
      const winner = declareWinner("X") || declareWinner("O");
      const isTie = gameBoard.every((cell) => cell !== "") && !winner;
      if (winner || isTie) {
        winnerDeclared = true;
        console.log(winner || "It's a tie!");
        btn.forEach((button) => button.removeEventListener("click", handleClick));
      }
    });
  });
});

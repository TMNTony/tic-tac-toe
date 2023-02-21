document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = ["", "", "", "", "", "", "", "", ""];
  const btn = document.querySelectorAll("button");
  let currentPlayer = "X";
  let winnerDeclared = false;
  const reset = document.getElementById("reset");
  const input1 = document.getElementById("player1Name");
  const input2 = document.getElementById("player2Name");

  reset.addEventListener("click", (event) => {
    location.reload();
  });

  function handleClick(event) {
    const player1 = input1.value;
    const player2 = input2.value;

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

    input1.classList.toggle("active");
    input2.classList.toggle("active");
  }

  function declareWinner(player) {
    const player1 = input1.value;
    const player2 = input2.value;

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

    return winnerPattern ? `${player === "X" ? player1 : player2} wins!` : null;
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
        alert(winner || "It's a tie!");
        btn.forEach((button) => button.removeEventListener("click", handleClick));
      }
    });
  });
});

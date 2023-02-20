document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = ["", "", "", "", "", "", "", "", ""];
  const btn = document.querySelectorAll("button");

  function handleClick(event) {
    const clickedButton = event.target;
    const index = clickedButton.getAttribute("data-index");
    if (gameBoard[index] !== "") {
      return;
    }

    gameBoard[index] = "X";
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

    return winnerPattern ? "You win!" : null;
  }

  btn.forEach((button) => {
    button.addEventListener("click", (event) => {
      handleClick(event);
      for (let i = 0; i < btn.length; i++) {
        btn[i].innerHTML = gameBoard[i];
      }
      const winner = declareWinner("X") || declareWinner("O");
      const isTie = gameBoard.every((cell) => cell !== "") && !winner;
      if (winner) {
        btn.forEach((button) => button.removeEventListener("click", handleClick));
      }
      if (winner || isTie) {
        console.log(winner || "It's a tie!");
      }
    });
  });
});

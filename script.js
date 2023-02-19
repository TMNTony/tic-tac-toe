document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = ["", "", "", "", "", "", "", "", ""];
  const btn = document.querySelectorAll("button");
  function handleClick(event) {
    const clickedButton = event.target;
    const index = clickedButton.getAttribute("data-index");
    gameBoard[index] = "X";
  }

  btn.forEach((button) => {
    button.addEventListener("click", (event) => {
      handleClick(event);
      for (let i = 0; i < btn.length; i++) {
        btn[i].innerHTML = gameBoard[i];
      }
    });
  });
});

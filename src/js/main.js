window.addEventListener('load', () => {

  const playerOne = 'X';
  const playerTwo = 'O';
  let gameEnded = false; // Bandera para controlar si el juego termino

  let turn = playerOne;

  document.getElementById("turn").value=document.getElementById("player1").value;

  const GAME = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  const BOXES = document.querySelectorAll('.box');

  const isFull = () => {
    const CP_BOXES = [...GAME].flat(Infinity);
    const isTotal = CP_BOXES.every(box => box !== null);
    return isTotal;
  }

  const checkGame = () => {
    const isWinnerRowOne = [GAME[0][0], GAME[0][1], GAME[0][2]].every(item => item === GAME[0][0] && item != null);
    const isWinnerRowTwo = [GAME[1][0], GAME[1][1], GAME[1][2]].every(item => item === GAME[1][0] && item != null);
    const isWinnerRowThree = [GAME[2][0], GAME[2][1], GAME[2][2]].every(item => item === GAME[2][0] && item != null);
    
    const isWinnerColumnOne = [GAME[0][0], GAME[1][0], GAME[2][0]].every(item => item === GAME[0][0] && item != null);
    const isWinnerColumnTwo = [GAME[0][1], GAME[1][1], GAME[2][1]].every(item => item === GAME[0][1] && item != null);
    const isWinnerColumnThree = [GAME[0][2], GAME[1][2], GAME[2][2]].every(item => item === GAME[0][2] && item != null);

    const isWinnerDiagonalOne = [GAME[0][0], GAME[1][1], GAME[2][2]].every(item => item === GAME[0][0] && item != null);
    const isWinnerDiagonalTwo = [GAME[0][2], GAME[1][1], GAME[2][0]].every(item => item === GAME[0][2] && item != null);

    if (isWinnerRowOne || isWinnerColumnOne) {
      // alert(`1`);
      // window.location.reload();
      return true;
    }

    if (isWinnerRowTwo || isWinnerColumnTwo) {
      // alert(`2`);
      // window.location.reload();
      return true;
    }

    if (isWinnerRowThree || isWinnerColumnThree) {
      // alert(`3`);
      // window.location.reload();
      return true;
    }

    if (isWinnerDiagonalOne) {
      // alert(`4`);
      // window.location.reload();
      return true;
    }

    if (isWinnerDiagonalTwo) {
      // alert(`5`);
      // window.location.reload();
      return true;
    }
    return false;
  }

  BOXES.forEach((box) => {
    box.addEventListener('click', () => {
      const row = box.getAttribute('data-row');
      const column = box.getAttribute('data-col');
      if (!gameEnded){
        if (GAME[row][column] != null){
          alert("La casilla ya esta ocupada, seleccione otra");
        }else{
          GAME[row][column] = turn === playerOne ? 0 : 1;    
          box.innerHTML = turn;
          if (checkGame()){   // verifica si gano algun jugador
            alert("Gano el jugador: " + (turn === playerOne ? document.getElementById("player1").value : document.getElementById("player2").value));
            gameEnded = true;
          } else{
            if (isFull()) {
              // deberia declarar empate si esta lleno y no hay ganador
              alert("Empate");
              gameEnded = true;
              // window.location.reload();
            }
          }
          turn = turn === playerOne ? playerTwo : playerOne; // cambio de turno
          document.getElementById("turn").value = turn === playerOne ? document.getElementById("player1").value : document.getElementById("player2").value;
        }
      }else{
        alert("El juego termino, reinicie la partida con el boton Reiniciar :D");
      }
      
    });
  })


  // reiniciar el juego
  const reload = document.getElementById("reload");
  reload.addEventListener("click", () => {
    location.reload();
  });
})
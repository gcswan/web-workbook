$(function() {
  let playerTurn = 'X';
  $('[data-cell]').click(function() {
    $(this).text(playerTurn);
    checkWin()
    playerTurn = playerTurn === 'X' ? 'O' : 'X';
    function checkWin() {
      const winningCombos = [
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6]
      ]

      for(let combo = 0; combo < winningCombos.length; combo++){
        if(
          $('[data-cell=' + `"${winningCombos[combo][0]}"` + ']').text() === playerTurn &&
          $('[data-cell=' + `"${winningCombos[combo][1]}"` + ']').text() === playerTurn &&
          $('[data-cell=' + `"${winningCombos[combo][2]}"` + ']').text() === playerTurn
          ){
            $('#announce-winner').text(`${playerTurn} Wins`);
          } else {
            return false
          }
      }
    }
  });
  $('#clear').click(clearBoard)
  })



 function clearBoard()  {
   $('[data-cell]').empty();
   $('#announce-winner').text('');
  }

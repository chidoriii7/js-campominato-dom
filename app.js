const btnPlay = document.querySelector(".btncells");
btnPlay.addEventListener("click", startGame);
function startGame() {
    //creare una griglia in base alla difficoltà selezionata
  const difficultyPlay = document.getElementById('selector').value; 
    //facile = 100 caselle (10x10)
    let numCells = 0
    if (difficultyPlay === 'facile') {
      numCells = 100
    } else if (difficultyPlay === 'normale') {
        //normale = 81 caselle (9x9)
      numCells = 81
    } else if (difficultyPlay === 'difficile') {
        //difficile = 49 caselle (7x7)
      numCells = 49

    }
    
    const containerCells = document.querySelector(".container");
    containerCells.innerHTML = ''
    //una volta cliccato il bottone play spawna la griglia del gioco
    for (let i = 0; i < numCells; i++) {
      // seleziono il container dove creare i div
  
      // creo i div
      const cell = document.createElement("div");
      //ai div che creo do la classe "cell" e un testo che si incrementa di 1 ogni casella
      cell.classList = "cell";
      cell.innerText = i + 1;
      containerCells.append(cell);
      //ad ogni click devo dargli la classe "cell-black"
      cell.addEventListener("click", function () {
        console.log("hai cliccato la casella numero: " + cell.innerText);
        cell.classList.add("cell-black");
      });
    }
  }

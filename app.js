const btnPlay = document.querySelector(".btncells");
btnPlay.addEventListener("click", startGame);
function startGame() {
  //creare una griglia in base alla difficoltà selezionata
  const difficultyPlay = document.getElementById("selector").value;
  //facile = 100 caselle (10x10)
  let numCells = 0;
  if (difficultyPlay === "facile") {
    numCells = 100;
  } else if (difficultyPlay === "normale") {
    //normale = 81 caselle (9x9)
    numCells = 81;
  } else if (difficultyPlay === "difficile") {
    //difficile = 49 caselle (7x7)
    numCells = 49;
  }

  const containerCells = document.querySelector(".container");
  containerCells.innerHTML = "";
  //array di numeri casuali in base al numero delle celle
  const arrayBomB = generateBomb(numCells)
  console.log(arrayBomB)

  //una volta cliccato il bottone play spawna la griglia del gioco
  for (let i = 0; i < numCells; i++) {
    // seleziono il container dove creare i div

    // creo i div
    const cell = document.createElement("div");
    //ai div che creo do la classe "cell" e un testo che si incrementa di 1 ogni casella
    cell.className = "cell";
    cell.innerText = i + 1;
    // calcolo della width usando la radice quadrata
    cell.style.width = `calc(100% / ${Math.sqrt(numCells)})`;
    containerCells.append(cell);
    //ad ogni click devo dargli la classe "cell-black"
    cell.addEventListener("click", function () {
      console.log("hai cliccato la casella numero: " + cell.innerText);
      if(arrayBomB.includes(i+1)) {
         cell.classList.add('cell-red');
         console.log('hai preso una bomba, hai perso!');
         //prendo tutte le caselle e vedo dove sono le bombe colorandole di rosso 
         const unclickedCells = containerCells.getElementsByClassName('cell');
        //  console.log(unclickedCells)
        
          for (let index = 0; index < arrayBomB.length; index++ ) {
            //tutte le caselle con la bomba diventano rosse
            const bombaCorrente = arrayBomB[index]
            // console.log(unclickedCells[bombaCorrente])
        unclickedCells[arrayBomB[index]-1].classList.add('cell-red');

          }
      } else {

        cell.classList.add('cell-green');

      }
    });
  }

}

//genero 16 numeri (bombe) casuali
function generateBomb(rangeDifficulty) {
   const arrayBomB =[];
   for(let i = 0 ; i < 16 ; i++) {
    let randomNum = Math.floor(Math.random() * rangeDifficulty);
    arrayBomB[i] = randomNum;
   }

   return arrayBomB;
}

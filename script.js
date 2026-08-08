function loadGrid() {
  let btnId = 0;
  for (let i = 0; i < 9; i++) {
    /* */
    $("#board").append($("<div>", { class: "medium-boxes", id: `med-${i}` }));

    console.log("hello?");
    for (let j = 0; j < 9; j++) {
      $(`#med-${i}`).append(
        $("<div>", { class: "small-boxes", id: `sml-${i}-${j}` }),
      );
      $(`#sml-${i}-${j}`).append($("<button>", { text: "Button", class: "btn btn-primary", id: `btn-${btnId}` }))
      btnId++
    }
  }
}

function fillGrid() {
  console.log("Poo");
    for (let id = 0; id < 81; id++) {
      const button = document.getElementById(`btn-${id}`);
      button.textContent = shuffle(id);
  }
  //checkEqual();
}

//remove later? 
function random() {
  let number =  parseInt(Math.random() * 10);
  while (number == 0)
  {
    //might parseInt(Math.random() * 10); its own method.
    number = parseInt(Math.random() * 10);
  }
  return number;
}
  
function shuffle(id){
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // let randomIndex = parseInt(Math.random() * 9);
  // let randomNumbers = numbers[randomIndex];
  // let store = numbers[0];
  // numbers[0] = randomNumbers;
  // numbers[randomIndex] = store;
  return numbers[id];
}

//remove later
function checkEqual() {
  for(let check = 0; check < 81; check++){
    for (let id = 0; id < 81; id++) {
        const text = document.getElementById(`btn-${id}`).innerText;
        parseInt(text, 10);
        const id2 = id + 1;
        if(id2 == 9)
        {
          return;
        }
        const text2 = document.getElementById(`btn-${id2}`).innerText;
        parseInt(text2, 10);
        while(text == text2)
        {
          document.getElementById(`btn-${id2}`).textContent = random();
          text2 = document.getElementById(`btn-${id2}`).textContent;
        }
        console.log(text);
      }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadGrid();
  fillGrid();
});

function loadGrid() {
  for (let i = 0; i < 9; i++) {
    /* */
    $("#board").append($("<div>", { class: "medium-boxes", id: `med-${i}` }));

    console.log("hello?");
    for (let j = 0; j < 9; j++) {
      $(`#med-${i}`).append(
        $("<div>", { class: "small-boxes", id: `sml-${i}-${j}` }),
      );
      $(`#sml-${i}-${j}`).append($("<button>", { text: "Button", class: "btn btn-primary", id: `btn-${j}` }))
    }
  }
}

function fillGrid() {
  console.log("Poo");
    for (let id = 0; id < 9; id++) {
      const button = document.getElementById(`btn-${id}`)
      button.textContent = random();
  }
  checkEqual();
}

function random() {
  return parseInt(Math.random() * 10);
}

function checkEqual() {
  for (let id = 0; id < 9; id++) {
      const text = document.getElementById(`btn-${id}`).innerText;
      const id2 = id + 1;
      const text2 = document.getElementById(`btn-${id2}`).innerText;
      while(text == text2)
      {
        document.getElementById(`btn-${id2}`).textContent = random();
      }
      console.log(text);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadGrid();
  fillGrid();
});

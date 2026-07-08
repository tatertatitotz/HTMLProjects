function loadGrid() {
  console.log("Poo");
  for (let i = 0; i < 9; i++) {
    /* */
    $("#board").append($("<div>", { class: "medium-boxes", id: `med-${i}`}));
  
    console.log("hello?");
    for (let j = 0; j < 9; j++) {
      $(`#med-${i}`).append(
        $("<div>", { class: "small-boxes", id: `sml-${i}-${j}` }),
      );
       $(`#sml-${i}-${j}`).append($("<button>", {text: "Button", class: "btn btn-primary", id: `btn-${j}`}))
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadGrid();
});

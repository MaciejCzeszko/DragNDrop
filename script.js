const left = document.querySelector(".left");
const right = document.querySelector(".right");
const listItems = document.querySelectorAll(".list-item");

listItems.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    let draggedItem = e.target;

    right.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    right.addEventListener("drop", (e) => {
      if (!e.target.classList.contains("right")) return;
      e.target.append(draggedItem);
      draggedItem = "";
    });

    left.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    left.addEventListener("drop", (e) => {
      e.preventDefault();

      if (!e.target.classList.contains("left")) return;
      e.target.append(draggedItem);
      draggedItem = "";
    });
  });
});

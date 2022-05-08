window.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector(".input-toDo");

  if (input.value === "") {
    return;
  }

  const list = document.querySelector(".list");
  const toDo = document.createElement("div");
  toDo.setAttribute("class", "toDo");
  const p = document.createElement("p");
  const removeButton = document.createElement("button");

  toDo.append(p);
  toDo.append(removeButton);

  p.textContent = input.value;
  input.value = "";

  removeButton.textContent = "remove";
  list.append(toDo);

  console.log(removeButton);
  removeButton.addEventListener("click", () => {
    list.removeChild(toDo);
  });

  //input,button event 발생 시 page reload, 그 현상 막아줌
});

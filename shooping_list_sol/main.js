const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");
let number = 0;

items.addEventListener("click", (event) => {
  if (event.target.className === "fas fa-trash-alt") {
    const id = event.target.getAttribute("id");
    const itemRow = document.querySelector(`li#${id}`);
    items.removeChild(itemRow);
    //Element.remove() 해도됨...
    //Element의 method 알아두기
  }
});

// click event를 처리하는 함수 주로 onEvent 명명
function onAdd() {
  //1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  //2. 새로운 아이템을 만든다(텍스트 + 삭제버튼)
  const item = createItem(text);

  //3. items 컨테이너 안에 새로만든 item 추가
  items.append(item);

  //scrolling
  item.scrollIntoView({ block: "center" });

  //4. input을 초기화
  input.value = "";
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("id", "row" + number);

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const span = document.createElement("span");
  span.setAttribute("class", "item__name");
  span.innerText = text;
  console.log(text);

  const divider = document.createElement("div");
  divider.setAttribute("class", "item__divider");

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");

  deleteBtn.innerHTML = `<i class="fas fa-trash-alt" id="row${number}"></i>`;
  number++;
  // deleteBtn.addEventListener("click", () => {
  //   items.removeChild(itemRow);
  // });

  item.append(span);
  item.append(deleteBtn);

  itemRow.append(item);
  itemRow.append(divider);

  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

//keypress : Deprecated, 대체해서 keydown/keyup 사용
//keydown은 한글에서 오류생길 수 있음 (isComposing사용)
//글자가 구성되는 동안 event발생 가능
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") onAdd();
});

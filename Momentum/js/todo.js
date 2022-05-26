const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));       //JSON.stringify : toDos를 입력하면 "a","b","c" 형태로 로컬스토리지에 저장. toDos를 String으로 저장하면 []도 같이 저장되기 때문에 ["a","b","c"]로 저장
}

function deleteToDo(event) {
    const li = event.target.parentElement;      //버튼의 클릭 이벤트를 통해 삭제할 버튼 찾기
    li.remove();    //li 삭제. localstorage에 남아있음.
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));      //id가 같으면 filter됨. toDos에서 제거. localstorage에서도 삭제됨.
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;

    const span = document.createElement("span");
    span.innerText = newToDo.text;
    
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);       //버튼 클릭시 삭제 진행

    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function handlToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj ={
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newToDoObj);        //배열 toDos에 newToDo값 삽입
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handlToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
//console.log(savedToDos);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);     //JSON.stringify를 통해 저장한 "["a","b","c"]"를  ["a","b","c"]형태로 불러냄.
    //console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);         //parsedToDos로 paintToDo 반복.
}

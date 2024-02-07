//window.onload = () => {
    // const day =["일","월","화","수","목","금","토"];
    // let now = new Date ();
    // console.log(now.getFullYear());
    // console.log(now.getMonth()+ 1);//자바스크립트는 0월(==1월)부터시작한다
    // console.log(now.getDate());
    // console.log(day[now.getDay()]);
    //-------------------------------------------------------------------
    // let arr = new Array();
    // let obj = {
    //     id: 1,
    //     name: "김준일"
    // }
    // let obj2 = {
    //     id: 2,
    //     name: "김준이"
    // }

    // arr.push(obj);
    // arr.push(obj2);

    // console.log(arr);

    // console.log(JSON.stringify(arr));// 객체를 ->json stringify == json형태로 바꿔준다
    // console.log(JSON.stringify(obj)); //json 자바스크립트에서 사용되는 표준 객체형태
    // console.log(JSON.stringify(obj2));

    // let jsonArr = JSON.stringify(arr);

    // console.log(JSON.parse(jsonArr))//parse = json 을 다시 객체로
//}

window.onkeyup = (e) => { //window = 전체
   if(e.keyCode === 27) {
     handleCancelClick();
   }
}


function handleAddTodoModalOpen() {
    const modal = document.querySelector(".root-modal");// document전체 
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML="추가하기";
    todoInput.value = "";
    submitButton.onclick = handleAddTodoSubmit;//만들어둔 함수 onclick에 넣는다

    todoInput.onkeydown = (e) => {
        if(e.ctrlkey && e.keyCode === 13) {
            submitButton.click();
        }
    }
    modal.classList.add("modal-show");
}

function handleEditTodoModalOpen(todoId) {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML="수정하기";

    let todoListJson = localStorage.getItem("todoList");
    let todoList = todoListJson != null ? JSON.parse(todoListJson) : new Array();
    
    let findTodoByTodoId = todoList.filter(todo => todo.todoId === todoId)[0];


    todoInput.value = findTodoByTodoId.content;
    submitButton.onclick = () => handleEditTodoSubmit(todoId);//정의된 함수 대입

    todoInput.onkeydown = (e) => {
        if(e.ctrlkey && e.keyCode === 13) {
            submitButton.click();
        }
    }

    modal.classList.add("modal-show");
}

function convertDateKor(curruntDate) {//date라는 변수를 받아준다.
    const dayKors =["일","월","화","수","목","금","토"];
    const year = curruntDate.getFullYear();
    const month = curruntDate.getMonth() + 1;
    const date = curruntDate.getDate();
    const day = dayKors[curruntDate.getDay()];
    return `${year}년 ${month}월 ${date}일 (${day})`;
}

function handleAddTodoSubmit() { //추가
    const modal = document.querySelector(".root-modal");
    const todoInput = document.querySelector(".todo-input");
    modal.classList.remove("modal-show");
    //저장 시작----------------------------
    let todoListJson = localStorage.getItem("todoList");
    //todoList = localStorage의 key값 에있는 value값꺼내오겠다
    let todoList = todoListJson != null ? JSON.parse(todoListJson) : new Array();

    let lastTodoId = todoList.length === 0 ? 0 : todoList[todoList.length - 1].todoId;
    

    let todoObject = {
        todoId: lastTodoId + 1,
        content: todoInput.value,
        date: convertDateKor(new Date())
    }

    todoList.push(todoObject);
    
    localStorage.setItem("todoList",JSON.stringify(todoList));
    //저장 완 ---------------------------
    getTodoList();
}

function handleEditTodoSubmit(todoId) { //수정
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");

    let todoListJson = localStorage.getItem("todoList");
    let todoList = todoListJson != null ? JSON.parse(todoListJson) : new Array();

    let findIndex = -1;

    for(let i = 0; i < todoList.length; i++) {
        if(todoList[i].todoId ===todoId) {
            findIndex = i;
            break;
        }
    }

    if(findIndex === -1 ) {
        alert("수정오류!");
        return;
    }

    todoList[findIndex].content = document.querySelector(".todo-input").value;
    todoList[findIndex].date = convertDateKor(new Date());

    localStorage.setItem("todoList", JSON.stringify(todoList));
    getTodoList();

}

function handleCancelClick() {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}
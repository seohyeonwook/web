function handleAddTodoModalOpen() {
    const modal = document.querySelector(".root-modal");// document전체 
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML="추가하기";
    todoInput.value = "";
    submitButton.onclick = handleAddTodoSubmit;//만들어둔 함수 onclick에 넣는다

    modal.classList.add("modal-show");
}

function handleAddTodoSubmit() {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}

function handleCancelClick() {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}
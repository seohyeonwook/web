let index = 1;

const appendButton = document.querySelector(".append-button");// 버튼 가지고와야한다

appendButton.onclick = () => {
    const textInputs = document.querySelectorAll(".text-inputs");//클래스 이름 통일시킨거 다 들고와서 밑에서 index주면 된다
    const dataTableBody = document.querySelector(".data-table-body");
    
    dataTableBody.innerHTML += `
        <tr>
        // 클릭이 일어났을때
            <td>${index}</td>
            <td>${textInputs[0].value}</td>
            <td>${textInputs[1].value}</td>
            <td>${textInputs[2].value}</td>
        </tr>
    `;

    index++;

    for(let input of textInputs) {
        input.value = ""; //.은 ~의 라고 생각하자 -> input의 value를 들고와
    }
}
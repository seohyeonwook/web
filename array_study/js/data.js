// spread연산

// let array = [1,2,3,4];
// array.push(5);
// array = [...array, 5, 6, ...array];

// console.log(array);

// let obj = {
//     name: "김준일",
//     age: 31
// }

// let obj2 = {
//     ...obj,
//     name: "김준이",
//     name: "김준삼"
// }

// console.log(obj);
// console.log(obj2);

// 비구조할당 - 객체에 쓴다

// let obj = {
//     id: 1,
//     name: "김준일",
//     age: 31
// }
// //------기존
// console.log(obj.id);
// //-----비구조할당
// let {id, name, age} = obj;//변수3개 만든거임

// console.log(id);// 사용이유 키값만 알고있으면 비구조할당으로 꺼내쓸수있음


// 크게보자 - 내가 자바스크립트 입장이라고 생각하자
//**시점이 다르다 프로그램은 순서대로 동작 */
//html은 해석과 분석의 과정을 거침 -한줄씩 실행된다
//1번줄부터 실행이 된다 대신 선언과 정의가 먼저 (호스팅) 그다음 실행이 된다

let dataList = [];//새로운 배열 생성 //전역에 둔 이유 다른함수에서도 어디서든 접근가능하게 //**시점이 다르다 프로그램은 순서대로 동작 */

window.onload = () => { //이벤트 정의 이벤트 는 함수호출하는것
    getDataList();//getDataList함수 정보를 호출하는거다..............만약 데이터가 있다면 불러오고 처음 화면에서는 그냥 불러와도 데이터가 없어

    const addInput = document.querySelector(".add-input");// 딱 여기까지가 초기화면
//------------------------------------------------------------이벤트 기준으로 생각 아래에는 엔터가 일어나면 위에랑 다른거다
    addInput.onkeyup = (e) => {//onkeyup 이벤트하는데
        if(e.keyCode === 13) {//엔터키가 들어왔을때만 실행해라
            const inputValue = addInput.value;

            const lastId = dataList.length === 0 ? 0 : dataList[dataList.length - 1].id;
            //배열에든게 아무것도 없으면 0, dataList.length - 1<<마지막 인덱스 의미  - 1하는 이유는 id는 1,2,3번인데 인덱스 번호는 0번부터 새기때문에 -1해서 맞춰준다

            // [ {id: 1,content: inputValue}, {id: 2,content: inputValue}, {id: 3,content: inputValue} ] 데이터 리스트// 데이터 오브젝트에 담겨있는 값 배열 1번,2번 이렇게

            const dataObj = {
                id: lastId + 1,//엔터가 일어날때마다 아이디값은 자동1씩증가
                content: inputValue
            }//엔터를 눌렀을때만 그래서 if문 안에

            dataList = [ ...dataList, dataObj ];//기존배열리스트에다가 추가할거야  그리고dataList에 덮어쓰기 그걸 반복
            
            addInput.value = "";//입력하고 입력된값 지우려고

            getDataList();//배열이 바꼇으니까 다시 불러준다
        }
    }
}

function ContentData({id, content}) { //컨포던트 만들기 함수의 이름을 대문자로 시작함
    return `
             <li>
                <span>${id}번 </span> 
                <span>${content}</span>
                <input type="text" class="edit-inputs" value="${content}">
                <button onclick="editData(${id})">수정</button>
                <button onclick="removeData(${id})">삭제</button> 
              
            </li>
    `;

}

function getDataList() {// 정보가 담겨 있는거다.....정의 하는것 -> onload가 되기전에 이미 정의 되어있다 (순서생각)....@@@  추가 
    const contentList = document.querySelector(".content-list");

    contentList.innerHTML = "";

    for(let dataObj of dataList) {//반복을돌려서 밑에 코드를 매번 새롭게 만들어준다  //+= 문자열더하기 f12눌러서 ELEMENTS에서 추가눌러보고 삭제쪽 보자 ID값 들어가있다
        // contentList.innerHTML += `  .//원래 하던 방법 
        //     <li>
        //         <span>${dataObj.id}번 </span> 
        //         <span>${dataObj.content}</span>
        //         <input type="text" class="edit-inputs" value="${dataObj.content}">
        //         <button onclick="editData(${dataObj.id})">수정</button>
        //         <button onclick="removeData(${dataObj.id})">삭제</button> 
              
        //     </li>
        // `; //  밑에서 만든 removeData 가져와서 삭제앞에 넣어준다 항상 생각하자 ONCLICK이 일어나야 이벤트가 실행된다

        contentList.innerHTML += ContentData(dataObj);
    }
    
}


function removeData(id) { //삭제 - 함수를 만드는건 기능을 하나 만드는거다 -> 일을 할 친구를 만든다 => 삭제를 맡을 친구 // 매개변수= 어떤녀석을 지워줘 -> 지우고싶은 번호를 줘야지 얘가 지우지
    // id값을 줘야지만 얘가 해당 key값을 찾아서 지운다 -배열에서 찾아서 지운다 -> 이 id값은 데이터베이스에 있는 key값
    
    // const findId = (dataObj) => dataObj.id === id; //함수 만든거 밑에필터 //함수안에 함수만들어서 => 그럼 remove에있는 매개변수 id값도 사용할수있다 
        //ex 데이터오브젝트의 아이디 값이 1이면 [{id: 1, content:"test1"}, {id: 2, content: "test2"}] 여기에서  {id: 1, content:"test1"},이부분
        // 지금은 오브젝트의 id와 remove의 id를 비교한다
    
    dataList = dataList.filter((dataObj) => dataObj.id !== id);//필터안에 ()내가 실행할 함수가 들어간다 그리고 참인 새로운 배열을 만들어서 맨앞에 dataList에 덮어 버린다
    //필터 - 조건이 참이면 새로운 배열에 담는다
    // 만약 remove 매개변수 id에 2번이 들어가면  [{id: 1, content:"test1"}, {id: 2, content: "test2"}, {id: 3, content: "test3"} ] 여기에서 
    //[{id: 1, content:"test1"} ,{id: 3, content: "test3"}] 이렇게 새로 배열에 담고 담은 값을 dataList에 덮어씌운다

    getDataList();
}

function editData(id) { //수정해야되는 대상을 찾아야 하니까 얘도 id 
    let findIndex = -1; //id번호 찾아야하는데 0번부터 시작이라 인덱스와 맞추려면 -1

    //방법1- 성능은 얘가 더 좋다 찾으면 break거니까
    for(let i = 0; i< dataList.length; i++) {// 찾아야한다
        if(dataList[i].id === id) {//데이터 리스트의 id값과 매개변수 id가 같으면 찾은거다
            findIndex = i; //찾은 인덱스 i를 findIndex에 담아줘라
            break;
        }
    }
    //방법2
    let findObj = dataList.filter((dataObj) => dataObj.id === id)[0];
    findIndex = dataList.indexOf(findObj);
    //인덱스의 위치를 찾는게 indexOf  id가들어가면안된다 객체안에 id값이지 객체자체가 1,2,3...는 아니다

    // let array = [1,2,3,4,5];
    // array.indexOf(3) 하면 4를 찾아준다

    const editInputs = document.querySelectorAll(".edit-inputs");

    dataList[findIndex].content = editInputs[findIndex].value; //수정할 대상의 content를 바꿔주는게 수정이다   

    getDataList();

}
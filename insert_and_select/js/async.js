console.log(1);
console.log(2);
console.log(3);//동기처리 nodjs, code runner다운로드 컨트롤 알트 n

// setTimeout(() => { 
//     console.log(4); //보내놓고 3초뒤에 실행 해라  
//     setTimeout(() => {
//         console.log(5);// 4다음에 2초뒤에 5실행해라 ( 비동기 안에 동기처리)
//     },2000);
// }, 3000); 

new Promise((resolve, reject) => {//promise 는 비동기라서 2번이 먼저찍히고 1번은 setTimeout으로 2초 정해둬서 요청 날려두고 resolve가 실행 해서 2 -> 3 -> 1
    setTimeout(() => {
        console.log("1번");
    }, 2000);
    resolve("3번");
}).then((result) => {// resolve = result
    console.log(result);
});

console.log("2번");

//-----------------------------

// console.log("프로그램 시작");

// const p = new Promise((resolve, reject) => {//비동기 //reject는 오류일때 호출
//     console.log("여기서 ");
//     console.log("여기까지");
//     resolve();
// })

// p.then(() => {//promise가 실행되고 실행되는 비동기
//     console.log("3초뒤에 출력");
// });//resolve가 실행됐을때


// console.log("여기가 먼저");//비동기 : 실행순서 상관없이 


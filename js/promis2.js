main();

// function main() {
//     //promis 비동기를 컨트롤할때 사용
//     // 동기 사이에 서 이작업이 끝나면(비동기)
//     // setTiomout자체가 비동기다
//     setTimeout(() => console.log(1), 3000);
//     console.log(2) 
//     console.log(3) 
// }

// function main() {
//     new Promise((resolve, reject) => {
//         console.log(1);
//         console.log(2);
//     }).then(() => {});
//     console.log(3);
// }

function main() {
    new Promise((resolve, reject) => {
        console.log(1);
        console.log(2);
        setTimeout(() => {console.log(4)}, 3000);
        resolve(); 
    }).then(() => {
        console.log("then실행");
    });
    console.log(3);
}
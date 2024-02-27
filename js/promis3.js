main();

function main() {
    const promises = [// 하나의 promise로 묶음
        new Promise((resolve, reject) => setTimeout(() => resolve(1),3000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(2),2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3),1000))
    ];

    Promise.all(promises).then(result => console.log(result));// 첫글자가 대문자인지도 잘 확인하자 대문자(클래스)
    
}
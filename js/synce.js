main();

function main() {
    p1(3,"data1").then(result => console.log(result));
    setTimeout(() =>p2("data2").then(result => console.log(result)), 4000);
    // p2에 await달수 없다
    p2("data3").then(result => p3(result, 100).then(result => console.log(result)));
    // .then은 리턴값을 받아서 
    p4("data4");
}
function p1(time, data) {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
            }, time * 1000);
    });    
}

async function p2(data) {// async는 resolve 호출 불가능 그래서 return 해야함
    // async 걸면 비동기 된다
     return data;// async는 위에서 
    
}

async function p3(data, value) {
    //async 가 달리면 리턴은 무조건 promis
    return{
        [data]: value
    }
}

async function p4(data) {
    const r1 = await p2(data);
    // await 달면 리턴값이 나온다
    const r2 = await p3(r1,200);
    //await 은 async function 안에서만 사용가능
    console.log(r2);
}
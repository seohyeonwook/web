
async function fx1() { //promise를 함수로 정의하는게 async
    console.log("fx1 비동기 호출");
    // throw new Error(); //강제로 예외 발동 //reject 하는법
    // return 10;//이렇게 하면 fx1은 리턴 타입이 number를 리턴하는 promise 가 됨 Click2 꺼
    // return없어도 resolve호출됨 자동적으로 resolve 있음=>근데 맨마지막에 있음
    return 10;
    
}

async function fx2(num) {
    console.log("fx2 비동기 호출");
    console.log(num + "출력");
}

async function fx3() {
    let arg = 0;
    let fx1Result = await fx1();// 리턴값을 fx1Result에 바로 담아준다 await= 비동기가 끝날때까지 기다려 ***비동기를 동기로 바꿔준다***
    //fx1이 호출되고 리턴값이 바로 담긴다
    arg = fx1Result;
    await fx2(arg);// await은 async안에서만 사용할수 있다
    
}

function handleSubmitClick3() {
    fx3();
}


function handleSubmitClick2() { 
  fx1().then(()=> { // 비동기의 return값은 then에서만 받을 수 있다
    console.log("then 호출");
    // console.log(result); //10의 값을 출력하기 위해서
  }).catch(() => {
    console.log("오류 생성");
  });//마우스 올려보면 리턴 타입이 promise 
  //async가 달리는 순간에 return이 10이아니라 promise로 나옴 그래서 .then 을 찍어서 호출한다

  console.log("동기실행")
}

//---------------------------------------------------------------------------------------------

function handleSubmitClick() {// 1번 호출 되면 p와 p2가 각각 비동기로 동작함
                                
    const p1 = new Promise((resolve, reject) => { 
        console.log("p1 프로미스 실행");//이거에 문제점. resolve를 원할때 호출할수 없다 그래서 async사용
        // resolve();
       reject();
    });

    p1.then(() => {// p1이실행돼야지만 이후에 then이 실행 된다 근데 reslove가 없어서 호출 안됨 then호출하려면 resolve있어야한다
        console.log("p1 then 실행");// 쉽게 말해서 resolve의 정의가 then
        return 10;// 리턴된 10을 그다음 then(num에) 저장 
    }).then((num) => { // then은 promise에서만 사용가능하다 그말은 .then을 찍으면 promise가 된다는 뜻 그래서  reject를 쓰면 아래 .catch가 실행가능
        console.log(num);
    }).then(() => {
        console.log("세번째 then");//이렇게 하면 비동기인데 동기처리가 되고 있다
    }).catch(() => {
        console.log("오류");//
    });


    p1.catch(() => { //이건 reject
        console.log("오류");
    });

    const p2 = new Promise((resolve, reject) => {
        console.log("p2 프로미스 실행");
    });

    console.log("동기 실행");//동기 실행
}


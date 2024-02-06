function add(num1, num2) {//함수가 제일 중요
    console.log("num1: " + num1);
    console.log(`num2: ${num2}`); // EL표현식 //위에 +랑 같은거임
    return num1 + num2;//리턴도 정해진게 아님 하고싶으면 하고
}

console.log(add(10, 20));

let addFunction = add;// 값 안넣고 함수 대입 가능

console.log(add);
console.log(addFunction);// add 와 addFunction은 같은거
console.log(addFunction(30, 40));

let user = {
    username: "junil",
    password: "1234",
    addFunction: function add(a, b) {//이렇게 함수대입가능
        return a + b
    }
}

console.log(user.addFunction(10, 20));

//익명 함수
let sub = function (a, b) { //변수명 안넣어줘도됨  => 함수가 대입가능하니까function
    return a - b;
}

let result1 = sub(10, 5);
console.log(result1);

console.log(sub); 

// 화살표함수(람다식)
let div = (a, b) => {
    return a / b;
}

console.log(div(10, 5));

div = (a, b) => a / b;//람다식은 중괄호 생략하면 리턴값이 된다
console.log(div(20, 5));
console.log(div);
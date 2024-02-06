// 자바스크립트 배열은 자바의 ArrayList와 유사

let numbers1 = [10, 20, 30];
let numbers2 = new Array();//아래위 둘다 배열 선언

numbers1.push(10);//값 추가 함수 push
console.log(numbers1);
numbers1.push(20);
console.log(numbers1);
console.log(numbers1[0]);
numbers1[0] = 30;//index지정해서 값 넣어도 된다
console.log(numbers1);
numbers1[2] = 50;
console.log(numbers1);
numbers1[5] = 100;
console.log(numbers1);
console.log(numbers1[3]);

for(let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}

//향상된 for
for(let num of numbers1) {
    console.log(num);
}

numbers1.forEach(n => console.log(n));




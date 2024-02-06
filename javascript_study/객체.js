// 자바스크립트 객체 형태 = { key: value, key: value }

let student = {//기본형태
    name: "김준일",
    age: 31
}

console.log(student);
console.log(typeof(student));
console.log(student.name);


class Student {
    name;
    age;//매개 변수 든 변수든 앞에 자료형 안붙인다

    //생성자
    constructor(name, age) {//constructor키워드 따로 존재
        this.name = name;
        this.age = age;
    }
}

let s = new Student("김준이", 32);
// s.name = "김준이";
// s.age = 32;
console.log(s);

class User {
    #username;// #붙이면 접근지정자프라이빗 -> 프라이빗 만들면 set get무조건 만들어줘야함
    password;

    set setUsername(username) {
        this.#username = username; 
    }

    get username() {
        return this.#username;
    }
}

let user = new User();
user.setUsername = "junil";
console.log(user.username);

let dataMap = new Map();
dataMap.set("username", "junil");
dataMap.set("password", "1234");

console.log(dataMap);
console.log(dataMap.get("password"));
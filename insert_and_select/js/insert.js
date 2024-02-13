function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");//all로 가지고 오면 배열로 가지고와서 dataInputs가 배열이 된다
    //querySelectorAll 객체를 선택할수있다 객체 = 태그하나하나 ex) body,input,button같은 태그
    const data = {//객체만들기
        name: dataInputs[0].value,
        age: dataInputs[1].value

    };

    console.log(data);
    const jsonData = JSON.stringify(data);//json객체으로 변환
    console.log(jsonData); //페이지 console에서 확인해보자 

    const option = {
        method: "post",//무슨요청으로 날릴건지
        headers: {
            "Content-Type": "application/json"//json으로 보내려면 컨텐츠 타입이 바껴야해서 포스트맨 페이지에서 보이는거랑 같다
        },
        body: jsonData
    };

    const p = fetch("http://localhost:8080/insert_and_select/data/addition",option) //포스트맨 페이지랑 같다 요청이라고 생각하자
    //data/addition일로 가라
    p.then((response) => {//매개변수 마음대로 지어도 됨
        response.json()
        .then((json) => {
            console.log(json)
        });
    });

    console.log("test");
    

    //option 말고 그냥   method: "post",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: jsonData
    // }; 이렇게 직접 넣어도 된다

    // const dataObj = json.parse(jsonData);//json을 다시 객체로
    // console.log(dataObj);

}//이거 받을수 있는 서블릿 만들어줘야한다 
//스프링에서 다이나믹 웹프로젝트 -> 모둘 4.0>next 하다가 web.xml체크
// 메이븐 
// 그룹:com.study
// 아티펙트: insert_and_select
// name: insert_and_select
// 프로젝트 우클릭 컨핑 -> 
// 맨 마지막 가서 그룹 아티펙트 이름 적고 만들면 porm.xml 생기는데 이게 메이븐(프로젝트 전체적인설정)
// mvn 들어가서 jsptomcat (9.0.85) , lombok, gson, mysql
// 패키기지 만들기 src/main/java에 만들때 com.study.insert_and_select 그룹아이디랑 아티펙트 =>
// com.study.insert_and_select.servlet 
// com.study.insert_and_select.servlet 안에 패키지 하나 더만들어서 com.study.insert_and_select.filter
// 필터 패키지에서 필터 새로만들고 서블릿에서 서블릿 하나 만들기
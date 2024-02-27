/**
 * servlet 프로젝트명: product 
 * group_id : com.study
 * artifact_id : product
 * name: product
 * jdk: 11
 * dependencies
 * 1. lombok
 * 2. jsp
 * 3. Gson
 * 4. mysql 
 * 
 * package
 * com.study.product
 *      config  - DBConfig
 *      dao     - ProductDao
 *      entity  - Product
 *      filter  - CommonFilter
 *      servlet - InsertProductServlet(/product, POST)
 *              - SearchProductServlet(/products, GET)
 * 
 * DB(db_study)
 * table(product_tb)
 * product_id, product_name(유니크), product_price, product_size(SS, S, M, L, XL, XXL)
 */

async function handleAddClick() {
    const dataInputs = document.querySelectorAll(".product-inputs");
    
    const data = {
        name: dataInputs[0].value,
        price: parseInt(dataInputs[1].value),
        size: dataInputs[2].value
    };

    const jsonData = JSON.stringify(data);

    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    };

    try {
        const response = await fetch("http://localhost:8080/product/data/addition",option);
        
        if(!response.ok) {
            // 응답받은 response.ok가 ! 이면  -> 실패했을때 
            throw await response.json();// 강제로 throw해서 오류처리

            //response.json()은 HTTP 응답에서 JSON 형식의 데이터를 가져와서
            // JavaScript 객체로 변환하는 메서드입니다.
            // 이 메서드는 Promise를 반환하며, 해당 Promise가 완료되면
            // JSON 데이터가 JavaScript 객체로 파싱됩니다. 
            
        }

        const json = await response.json();
        // 성공적인 경우엔 response.json() 함수 호출 하고 json변수에 저장 
       
    } catch(error) {
        console.log(error);
        alert(error.errorMessage);
    }
}
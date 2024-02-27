async function handleSearchClick() {
    // 비동기 함수 handleSearchClick을 선언합니다.
    // 이 함수는 상품 데이터를 검색하고 결과를 처리합니다.
    try {
        const response = await fetch("http://localhost:8080/product/data/list");
        if(!response.ok) {
            throw await response.json();
        }
        // 서버 응답이 성공적이지 않으면 오류를 throw합니다.
        // 오류 응답의 JSON 내용은 response.json()을 사용하여 읽습니다.

        const responseData = await response.json();
        // 성공적인 경우,
        // 서버 응답 데이터를 JSON 형식으로 읽어 responseData 변수에 저장합니다.

        const productList = document.querySelector(".product-list");
        //  HTML 문서에서 클래스가 product-list인 요소를 찾아
        // productList 변수에 저장합니다.
        productList.innerHTML = ``;
        // 상품 목록을 표시하는 요소의 내용을 초기화합니다.

        for(let product of responseData.data) {
            // 서버에서 받은 상품 데이터를 반복적으로 처리합니다.
            productList.innerHTML += `
            <li>productId: ${product.productId} / name: ${product.name} / price: ${product.price}
             / size: ${product.size}</li>
            `;
        }

    }catch(error) {
        console.log(error); 
    } 
}
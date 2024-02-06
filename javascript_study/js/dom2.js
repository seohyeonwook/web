const submitButton = document.querySelector(".input-submit");

// 이벤트 속성
submitButton.onclick = () => {/* 클릭 일어나면 아래있는거 실행해라 */
    const input = document.querySelector(".inputs"); 
    const dataList = document.querySelector(".data-list");
    
    dataList.innerHTML += `<li>${input.value}</li>`;
    /*  innerHTML = dom2 에있는 ul태크 에있는*/
}

/*
    let submitButton = {
        onclick: null
    }

    submitButton.onclick = () => {

    }
*/
const menuButton = document.querySelector(".menu-button");

menuButton.onclick = () => {
    const sideBarLayout= document.querySelector(".side-bar-layout");//선택자라서.
    sideBarLayout.classList.add("side-bar-show");//클래스 네임이라.없음
    const sideBarContainer = document.querySelector(".side-bar-container");
    sideBarContainer.classList.add("side-bar-container-show");

}

const clossButton = document.querySelector(".side-bar-close-button");

clossButton.onclick = () => {
    const clossButton = document.querySelector(".side-bar-layout");
    clossButton.classList.remove("side-bar-show");
    const sideBarContainer = document.querySelector(".side-bar-container");
    sideBarContainer.classList.remove("side-bar-container-show");
}
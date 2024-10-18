export default function option(t){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBodyMenuUpperNewsBody>div>div{
            width: 100%;
            border-bottom: 1px solid var(--colorBlack);
            padding: 10px;
            cursor: pointer;
            transition: color var(--transitionTime);
        }
        .initContentSliderLeftSideBodyMenuUpperNewsBody>div>div:hover{
            color: var(--colorOrange);
        }`

    const option = document.createElement("div")
    option.innerHTML = t
    option.onclick = function a(){
        document.getElementsByClassName("initContent")[0].style.translate = "0% -50%"
    }
    return(option)
}
import top from "./top/main.js"
import body from "./body/main.js"

export default function leftSide(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSide{
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
        }`

    const leftSide = document.createElement("div")
    leftSide.className = "initContentSliderLeftSide"
    leftSide.appendChild(top())
    leftSide.appendChild(body())
    return(leftSide)
}
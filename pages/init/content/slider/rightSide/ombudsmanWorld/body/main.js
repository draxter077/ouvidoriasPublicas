import leftSide from "./leftSide/main.js"
import rightSide from "./rightSide/main.js"

export default function body(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanWorldBody{
            display: flex;
            flex-direction: row;
            height: 100%;
            width: 100%;
        }`

    const body = document.createElement("div")
    body.className = "initContentSliderRightSideOmbudsmanWorldBody"
    body.appendChild(leftSide())
    body.appendChild(rightSide())
    return(body)
}
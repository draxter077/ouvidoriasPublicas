import top from "./top/main.js"
import body from "./body/main.js"

export default function leftSide(){
    const leftSide = document.createElement("div")
    leftSide.className = "width50 height100 flexColumn justifyContentFlexEnd alignItemsCenter"
    leftSide.appendChild(top())
    leftSide.appendChild(body())
    return(leftSide)
}
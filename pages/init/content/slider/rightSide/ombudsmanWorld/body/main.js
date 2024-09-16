import leftSide from "./leftSide/main.js"
import rightSide from "./rightSide/main.js"

export default function body(){
    const body = document.createElement("div")
    body.className = "width100 height100 flexRow"
    body.appendChild(leftSide())
    body.appendChild(rightSide())
    return(body)
}
import globe from "./globe/main.js"
import search from "./search/main.js"

export default function leftSide(){
    const leftSide = document.createElement("div")
    leftSide.className = "width50 height90 flexColumn justifyContentSpaceBetween"
    leftSide.appendChild(globe())
    leftSide.appendChild(search())
    return(leftSide)
}
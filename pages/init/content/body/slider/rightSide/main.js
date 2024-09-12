import option from "./option/main.js"

export default function rightSide(){
    const rightSide = document.createElement("div")
    rightSide.className = "width50 padding20px"
    rightSide.appendChild(option())
    return(rightSide)
}
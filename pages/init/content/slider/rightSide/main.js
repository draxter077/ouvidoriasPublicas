import content from "./content/main.js"

export default function rightSide(){
    const rightSide = document.createElement("div")
    rightSide.className = "width50 height100 padding20px"
    rightSide.id = "rightSide"
    rightSide.appendChild(content())
    return(rightSide)
}
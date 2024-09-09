import title from "./title/main.js"

export default function rightSide(){
    const rightSide = document.createElement("div")
    rightSide.appendChild(title())
    return(rightSide)
}
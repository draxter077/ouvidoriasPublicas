import menu from "./menu/main.js"

export default function leftSide(){
    const leftSide = document.createElement("div")
    leftSide.className = "width50 height100 flexColumn alignItemsCenter justifyContentFlexEnd padding20px"
    leftSide.appendChild(menu())
    return(leftSide)
}
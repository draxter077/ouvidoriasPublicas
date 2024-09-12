import menu from "./menu/main.js"

export default function leftSide(){
    const leftSide = document.createElement("div")
    leftSide.className = "width50 height100 flexRow alignItemsCenter justifyContentFlexEnd padding20px"
    leftSide.appendChild(menu())
    return(leftSide)
}
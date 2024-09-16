import menu from "./menu/main.js"

export default function body(){
    const body = document.createElement("div")
    body.className = "width100 height100 flexColumn alignItemsCenter justifyContentFlexEnd padding20px"
    body.appendChild(menu())
    return(body)
}
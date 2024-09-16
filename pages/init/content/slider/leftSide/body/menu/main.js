import prior from "./prior/main.js"
import info from "./info/main.js"

export default function menu(){
    const menu = document.createElement("div")
    menu.className = "width100 height100 flexColumn alignItemsCenter justifyContentFlexEnd padding20px25px borderRadius15px fontSize25px"
    menu.appendChild(prior())
    menu.appendChild(info())
    return(menu)
}
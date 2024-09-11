import palace from "./palace/main.js"
import menu from "./menu/main.js"

export default function body(){
    const body = document.createElement("div")
    body.className = "width100 flexRow"
    body.appendChild(palace())
    body.appendChild(menu())
    return(body)
}
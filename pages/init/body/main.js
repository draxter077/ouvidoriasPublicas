import title from "./title/main.js"
import menu from "./menu/main.js"

export default function body(){
    const body = document.createElement("div")
    body.className = "initBody"
    body.appendChild(title())
    body.appendChild(menu())
    return(body)
}
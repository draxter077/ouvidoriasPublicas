import title from "./title/main.js"
import menu from "./menu/main.js"

export default function top(){
    const top = document.createElement("div")
    top.className = "initTop"
    top.appendChild(title())
    top.appendChild(menu())
    return(top)
}
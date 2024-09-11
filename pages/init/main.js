import top from "./top/main.js"

export default function init(){
    const init = document.createElement("div")
    init.className = "width100dvw height100dvh"
    init.appendChild(top())
    return(init)
}
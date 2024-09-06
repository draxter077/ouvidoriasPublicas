import top from "./top/main.js"

export default function init(){
    const init = document.createElement("div")
    init.className = "init"
    init.appendChild(top())
    return(init)
}
import top from "./top/main.js"
import body from "./body/main.js"

export default function init(){
    const init = document.createElement("div")
    init.className = "init"
    init.appendChild(top())
    init.appendChild(body())
    return(init)
}
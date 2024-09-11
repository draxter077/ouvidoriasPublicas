import background from "./background/main.js"
import top from "./top/main.js"

export default function init(){
    const init = document.createElement("div")
    init.appendChild(background())
    init.appendChild(top())
    return(init)
}
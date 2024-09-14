import background from "./background/main.js"
import content from "./content/main.js"

export default function init(){
    const init = document.createElement("div")
    init.className = "height100dvh width100"
    init.appendChild(background())
    init.appendChild(content())
    return(init)
}
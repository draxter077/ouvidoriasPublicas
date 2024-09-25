import background from "./background/main.js"
import content from "./content/main.js"

export default function init(){
    document.getElementsByTagName('style')[0].innerHTML += `
        .init{
            height: 100dvh;
            width: 100%;
        }`

    const init = document.createElement("div")
    init.className = "init"
    init.appendChild(background())
    init.appendChild(content())
    return(init)
}
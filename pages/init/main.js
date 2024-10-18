import background from "./background/main.js"
import content from "./content/main.js"

export default function init(){
    let style = `
        {
            height: 100dvh;
            width: 100%;
        }`

    const init = createElementToPage(undefined, "div", style, undefined)
    init.appendChild(background())
    init.appendChild(content())
    return(init)
}
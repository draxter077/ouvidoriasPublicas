import info from "./info/main.js"
import text from "./text/main.js"
import imgs from "./imgs/main.js"

export default function body(){
    let style = `
        {
            width: 100%;
            height: 95%;
            padding: 10px;
            overflow-y: scroll;
        }`

    const body = createElementToPage(undefined, "div", style)
    body.appendChild(info())
    body.appendChild(text())
    body.appendChild(imgs())
    return(body)
}
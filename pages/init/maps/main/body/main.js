import left from "./left/main.js"
import right from "./right/main.js"

export default function body(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            margin: 20px 0px 0px 0px;
        }`

    const body = createElementToPage(undefined, "div", style)
    body.appendChild(left())
    body.appendChild(right())
    return(body)
}
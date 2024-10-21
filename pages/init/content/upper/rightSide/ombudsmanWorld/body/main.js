import leftSide from "./leftSide/main.js"
import rightSide from "./rightSide/main.js"

export default function body(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            height: 100%;
            width: 100%;
        }
        :responsive{
           flex-direction: column;
        }`

    const body = createElementToPage(undefined, "div", style)
    body.appendChild(leftSide())
    body.appendChild(rightSide())
    return(body)
}
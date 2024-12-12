import recomendations from "./recomendations/main.js"
import total from "./total/main.js"

export default function body(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 95%;
        }`

    const body = createElementToPage(undefined, "div", style)
    body.appendChild(recomendations())
    body.appendChild(total())
    return(body)
}
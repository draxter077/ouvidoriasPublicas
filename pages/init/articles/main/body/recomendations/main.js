import title from "./title/main.js"
import list from "./list/main.js"

export default function recomendations(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            width: 30%;
            height: 100%;
            padding: 5px 10px 5px 5px;
            border-right: 1px solid var(--colorBlack);
        }`

    const recomendations = createElementToPage(undefined, "div", style)
    recomendations.appendChild(title())
    recomendations.appendChild(list())
    return(recomendations)
}
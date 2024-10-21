import title from "./title/main.js"
import data from "./data/main.js"

export default function info(i){
    let style = `
        {
            display: flex;
            flex-direction: column;
        }`

    const info = createElementToPage(undefined, "div", style)
    info.appendChild(title(i.title))
    info.appendChild(data(i.data))
    return(info)
}